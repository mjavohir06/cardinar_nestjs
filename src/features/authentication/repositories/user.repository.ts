import { BaseRepository } from "@/core/repository/BaseRepository";
import { InjectRepository } from "@nestjs/typeorm";
import { FindOptionsWhere, Repository } from "typeorm";
import { ConfigService } from "@nestjs/config";


import { Injectable } from "@nestjs/common";
import { UserEntity } from "../entities/user.entity";
import { OtpCodeEntity } from "../entities/otpCode.entity";
import { ObjectId } from "typeorm/browser";


@Injectable()

export class UserRepository extends BaseRepository<UserEntity> {
    constructor(
        protected readonly config: ConfigService,
        @InjectRepository(UserEntity)
        protected readonly repo: Repository<UserEntity>,
        @InjectRepository(OtpCodeEntity)
        protected readonly otpCode: Repository<OtpCodeEntity>,
    ) {
        super()
    }

    async otpFindOneBy(userId: number) {
        return await this.otpCode.findOneBy({ userId })
    }

    async otpRemove(userId: number) {
        const otps = await this.otpCode.findBy({ userId })
        return await this.otpCode.remove(otps)
    }

    async otpCreate(userId: number, code: string) {
        return await this.otpCode.save({ userId, code })
    }

    async otpDelete(criteria: string | number | string[] | FindOptionsWhere<OtpCodeEntity> | FindOptionsWhere<OtpCodeEntity>[] | Date | ObjectId | number[] | Date[] | ObjectId[]) {
        return await this.otpCode.delete(criteria)
    }


}