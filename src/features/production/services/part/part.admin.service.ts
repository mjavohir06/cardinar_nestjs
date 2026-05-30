import { BadRequestException, Injectable, NotFoundException } from "@nestjs/common";

import ServiceHelper from "@/core/services/service.helper";

import { PartEntity } from "../../entities/part.entity";
import { PartRepository } from "../../repositories/part.repo";
import { PartUpdateDto } from "../../dtos/part/admin/part.update.dto";
import { PartCreateDto } from "../../dtos/part/admin/part.create.dto";

const message404 = "Bunday idli branch topilmadi!"



@Injectable()
export class PartAdminService extends ServiceHelper<PartEntity> {

    constructor(
        protected readonly repo: PartRepository
    ) {
        super()
    }
    private async tekshir(payload: PartUpdateDto) {
        if (payload.materialId) {
            const ent = await this.repo.materialFindOneBy(payload.materialId)
            if (!ent) throw new BadRequestException("Product id noto'g'ri!")
        }
    }

    async create(payload: PartCreateDto,image:Express.Multer.File) {
        await this.tekshir(payload)
        payload.image=image.path
        return await this.repo.save(payload as PartEntity)
    }

    async update(id: number, payload: PartUpdateDto,image?:Express.Multer.File) {
        await this.tekshir(payload)
        if(image) payload.image=image.path
        const ent = await this.repo.findOneBy({ id })
        if (!ent) throw new NotFoundException("Bunday idli part topilmadi!")

        const newEnt = this.update_merge(ent, payload)
        return await this.repo.save(newEnt)
    }
}