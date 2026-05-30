import { BadRequestException, Injectable, NotFoundException } from "@nestjs/common";

import ServiceHelper from "@/core/services/service.helper";
import { CarModelEntity } from "../../entities/carModel.entity";
import { CarModelRepository } from "../../repository/carModel.repo";
import { CarModelUpdateDto } from "../../dtos/carModel/admin/carModel.update.dto";
import { CarModelCreateDto } from "../../dtos/carModel/admin/carModel.create.dto";


const message404 = "Bunday idli branch topilmadi!"



@Injectable()
export class CarModelAdminService extends ServiceHelper<CarModelEntity> {

    constructor(
        protected readonly repo: CarModelRepository
    ) {
        super()
    }
    private async tekshir(payload: CarModelUpdateDto) {
        if (payload.carMakeId) {
            const ent = await this.repo.carMakeFindOneBy(payload.carMakeId)
            if (!ent) throw new BadRequestException("carMake id noto'g'ri!")
        }
    }

    async create(payload: CarModelCreateDto) {
        await this.tekshir(payload)
        return await this.repo.save(payload as CarModelEntity)
    }

    async update(id: number, payload: CarModelUpdateDto) {
        await this.tekshir(payload)
        const ent = await this.repo.findOneBy({ id })
        if (!ent) throw new NotFoundException("Bunday idli part topilmadi!")

        const newEnt = this.update_merge(ent, payload)
        return await this.repo.save(newEnt)
    }
}