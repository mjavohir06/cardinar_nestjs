import { Injectable, NotFoundException } from "@nestjs/common";
import { BannerCreateDto } from "../../dtos/admin/banner/banner.create.dto";
import { BannerRepository } from "../../repositories/banner.repository";
import { BannerEntity } from "../../entities/banner.entity";
import { BannerUpdateDto } from "../../dtos/admin/banner/banner.update.dto";
import { SearchFilters } from "@/core/filters/search.filters";
import { BannerAdminListDto } from "../../dtos/admin/banner/bannner.list.dto";
import ServiceHelper from "@/core/services/service.helper";

const banermessage="Bunday idli banner topilmadi!"

@Injectable()
export class BannerAdminService extends ServiceHelper<BannerEntity>{

    constructor(
        protected readonly repo: BannerRepository,
    ) {
        super()
    }

    async create(payload: BannerCreateDto, image: Express.Multer.File) {
        return await this.repo.save({ ...payload, image: image.path } as BannerEntity)
    }

    async getAll(filters: SearchFilters) {

        return await this.repo.getAll(filters)
    }

    async update(id: number, payload: BannerUpdateDto, image?: Express.Multer.File) {
        const banner = await super.foundEntityAndCheck({where:{id},message:banermessage})
        if (image) banner.image = image.path

        const newbanner = super.update_merge(banner, payload)

        return await this.repo.save(newbanner)
    }

    async delete(id: number) {
        const banner = await super.foundEntityAndCheck({where:{id},message:banermessage})
        return await this.repo.remove(banner)
    }
}