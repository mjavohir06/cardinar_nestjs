import { BadRequestException, Injectable, NotFoundException, UnauthorizedException } from "@nestjs/common";

import ServiceHelper from "@/core/services/service.helper";
import { UserEntity } from "../../entities/user.entity";
import { UserRepository } from "../../repositories/user.repository";
import { UserCreateDto } from "../../dtos/user/public/user.create.dto";
import { UserSingInDto } from "../../dtos/user/public/user.singin.dto";
import argon2 from "argon2"
import { JwtService } from "@nestjs/jwt";
import { Role } from "@/core/enums/role.enum";
import { MailerService } from "@nestjs-modules/mailer";
import { Cron } from "@nestjs/schedule";
import { LessThan } from "typeorm";


const message404 = "Bunday idli user topilmadi!"


@Injectable()
export class UserPublicService extends ServiceHelper<UserEntity> {

    constructor(
        private readonly jwtService: JwtService,
        protected readonly repo: UserRepository,
        private readonly mailer: MailerService
    ) {
        super()
    }
    @Cron("* * * * *") // har minut
    async handleCleanup() {

        const fiveMinAgo = new Date(
            Date.now() - 5 * 60 * 1000
        )

        await this.repo.delete({
            isActive:false,
            created: LessThan(fiveMinAgo)
        })
        await this.repo.otpDelete(
            {created: LessThan(fiveMinAgo)}
        )

        console.log("OLD CODES AND USERS DELETED 🚀")
    }

    private async sendOtp(email: string, otp: string) {
        return await this.mailer.sendMail({
            to: email,
            subject: 'Tasdiqlash kodi',
            html: `
                <h2>Tasdiqlash kodingiz:</h2>
                <h1>${otp}</h1>
                <p>Kod 5 daqiqa davomida amal qiladi</p>
            `
        })
    }

    private async sendWelcome(email: string, fullName: string) {
        await this.mailer.sendMail({
            to: email,
            subject: 'Xush kelibsiz!',
            html: `<h2>Salom, ${fullName}! Ro'yxatdan o'tganingiz uchun rahmat.</h2>`
        })
    }

    private jwt(user: { id: number, email: string, role: Role, }) {
        let userPayload = {
            id: user.id,
            email: user.email,
            role: user.role,
        };

        return this.jwtService.sign(userPayload, { expiresIn: "1d" });
    }

    private generateCode() {
        const keys = "1234567890qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM-_"
        const count = Math.floor(Math.random() * 3) + 5
        let code = ""
        for (let e = 0; e < count; e++) {
            const i = Math.floor(Math.random() * keys.length)
            code += keys[i]
        }

        return code
    }

    async singup(payload: UserCreateDto) {
        const email = await this.repo.findOneBy({ email: payload.email })
        const tel = await this.repo.findOneBy({ phoneNumber: payload.phoneNumber })

        if (email) throw new BadRequestException(`${payload.email} allaqachon ro'yhatdan o'tgan!`)
        if (tel) throw new BadRequestException(`${payload.phoneNumber} allaqachon ro'yhatdan o'tgan!`)

        payload.password = await argon2.hash(payload.password)
        const user = await this.repo.save(payload as UserEntity)
        const code = this.generateCode()
        const co = await this.sendOtp(payload.email, code)
        console.log(co);

        const otp = await this.repo.otpCreate(user.id, code)
        return user
    }

    async checkCode(payload: { id: number, code: string }) {
        const otp = await this.repo.otpFindOneBy(payload.id)
        if (!otp) throw new BadRequestException()
        if (otp.code !== payload.code) throw new BadRequestException("kod xato")
        const user = await this.repo.findOneBy({ id: payload.id })
        if (!user) throw new NotFoundException()
        user.isActive = true
        let accessToken = this.jwt(user)
        await this.repo.save(user)
        return { accessToken: accessToken };
    }

    async singin(payload: UserSingInDto) {
        let user = await this.repo.findOneBy({ email: payload.email });
        if (!user || !user.password) {
            throw new UnauthorizedException();
        }

        if (!user.isActive) {
            throw new UnauthorizedException();
        }

        let passwordsMatch = await argon2.verify(user.password, payload.password);
        if (!passwordsMatch) {
            throw new UnauthorizedException("parol xato");
        }

        let accessToken = this.jwt(user)

        return { accessToken: accessToken };
    }

}