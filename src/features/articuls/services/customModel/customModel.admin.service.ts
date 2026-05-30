import { BadRequestException, Injectable, NotFoundException } from "@nestjs/common";

import ServiceHelper from "@/core/services/service.helper";
import { CarModelEntity } from "../../entities/carModel.entity";
import { CarModelRepository } from "../../repository/carModel.repo";
import { CarModelUpdateDto } from "../../dtos/carModel/admin/carModel.update.dto";
import { CarModelCreateDto } from "../../dtos/carModel/admin/carModel.create.dto";
import { CustomModelRepository } from "../../repository/customModel.repo";
import { CustomModelEntity } from "../../entities/customModel.entity";
import { CustomModelCreateDto } from "../../dtos/customModel/admin/cModel.create.dto";
import { CustomModelUpdateDto } from "../../dtos/customModel/admin/cModel.update.dto";


const message404 = "Bunday idli branch topilmadi!"



@Injectable()
export class CustomModelAdminService extends ServiceHelper<CustomModelEntity> {

    constructor(
        protected readonly repo: CustomModelRepository
    ) {
        super()
    }

    async create(payload: CustomModelCreateDto,image:Express.Multer.File) {
        payload.image=image.path
        return await this.repo.save(payload as CustomModelEntity)
    }

    async update(id: number, payload: CustomModelUpdateDto,image?:Express.Multer.File) {
        if(image) payload.image=image.path
        const ent = await this.repo.findOneBy({ id })
        if (!ent) throw new NotFoundException("Bunday idli customModel topilmadi!")

        const newEnt = this.update_merge(ent, payload)
        return await this.repo.save(newEnt)
    }
}