import { BadRequestException, Injectable, NotFoundException } from "@nestjs/common";

import ServiceHelper from "@/core/services/service.helper";
import { CarModelEntity } from "../../entities/carModel.entity";
import { CarModelRepository } from "../../repository/carModel.repo";
import { CarModelUpdateDto } from "../../dtos/carModel/admin/carModel.update.dto";
import { CarModelCreateDto } from "../../dtos/carModel/admin/carModel.create.dto";
import { CustomProductEntity } from "../../entities/customProduct.entity";
import { CustomProductRepository } from "../../repository/customProduct.repo";
import { CustomProductCreateDto } from "../../dtos/customProduct/admin/cProduct.create.dto";
import { CustomProductUpdateDto } from "../../dtos/customProduct/admin/cProduct.update.dto";


const message404 = "Bunday idli branch topilmadi!"



@Injectable()
export class CustomProductAdminService extends ServiceHelper<CustomProductEntity> {

    constructor(
        protected readonly repo: CustomProductRepository
    ) {
        super()
    }
    private async tekshir(payload: CustomProductUpdateDto) {
        if (payload.carMakeId) {
            const ent = await this.repo.carMakeFindOneBy(payload.carMakeId)
            if (!ent) throw new BadRequestException("carMake id noto'g'ri!")
        }

        if (payload.carModelId) {
            const ent = await this.repo.carModelFindOneBy(payload.carModelId)
            if (!ent) throw new BadRequestException("carModel id noto'g'ri!")
        }

        if (payload.modelId) {
            const ent = await this.repo.cModelFindOneBy(payload.modelId)
            if (!ent) throw new BadRequestException("customModel id noto'g'ri!")
        }
        
    }

    async create(payload: CustomProductCreateDto,image:Express.Multer.File) {
        await this.tekshir(payload)
        payload.image=image.path
        return await this.repo.save(payload as CustomProductEntity)
    }

    async update(id: number, payload: CustomProductUpdateDto,image?:Express.Multer.File) {
        await this.tekshir(payload)
        if(image) payload.image=image.path
        const ent = await this.repo.findOneBy({ id })
        if (!ent) throw new NotFoundException("Bunday idli customProduct topilmadi!")

        const newEnt = this.update_merge(ent, payload)
        return await this.repo.save(newEnt)
    }
}