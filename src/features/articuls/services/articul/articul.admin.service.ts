import { BadRequestException, Injectable, NotFoundException } from "@nestjs/common";

import ServiceHelper from "@/core/services/service.helper";
import { ArticulEntity } from "../../entities/articul.entity";
import { ArticulRepository } from "../../repository/articul.repo";
import { ArticulCreateAdmin } from "../../dtos/articul/admin/articul.create.admin.dto";
import { ArticulUpdateAdmin } from "../../dtos/articul/admin/articul.update.admin.dto";


const message404 = "Bunday idli branch topilmadi!"



@Injectable()
export class ArticulAdminService extends ServiceHelper<ArticulEntity> {

    constructor(
        protected readonly repo: ArticulRepository
    ) {
        super()
    }
    private async tekshir(payload: ArticulUpdateAdmin) {
        if (payload.carModelId) {
            const ent = await this.repo.carModelFindOneBy(payload.carModelId)
            if (!ent) throw new BadRequestException("carModel id noto'g'ri!")
        }
        if (payload.productId) {
            const ent = await this.repo.productFindOneBy(payload.productId)
            if (!ent) throw new BadRequestException("product id noto'g'ri!")
        }
    }

    async create(payload: ArticulCreateAdmin) {
        await this.tekshir(payload)
        return await this.repo.save(payload as ArticulEntity)
    }

    async update(id: number, payload: ArticulUpdateAdmin) {
        await this.tekshir(payload)
        const ent = await this.repo.findOneBy({ id })
        if (!ent) throw new NotFoundException("Bunday idli part topilmadi!")

        const newEnt = this.update_merge(ent, payload)
        return await this.repo.save(newEnt)
    }
}