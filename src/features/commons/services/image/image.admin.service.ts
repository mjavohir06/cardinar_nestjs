import { BadRequestException, Injectable, NotFoundException } from "@nestjs/common";
import ServiceHelper from "@/core/services/service.helper";
import { ImageEntity } from "../../entities/image.entity";
import { ImageRepository } from "../../repositories/image.repo";
import { ImageCreateDto } from "../../dtos/image/admin/image.create.dto";
import { ImageUpdateDto } from "../../dtos/image/admin/image.update.dto";







@Injectable()
export class ImageAdminService extends ServiceHelper<ImageEntity> {

    constructor(
        protected readonly repo:ImageRepository
    ){
        super()
    }
    private async tekshir(payload:ImageUpdateDto){
        if(payload.productId){
            const ent=await this.repo.productFindOneBy(payload.productId)
            if(!ent) throw new BadRequestException("Bunday Idli product mavjud emas!")
        }
    }
    private isPic(image?:Express.Multer.File){
        console.log(image);
        
        if(image && !image.path.startsWith("uploads\\image")) throw new BadRequestException("Faqat rasm qabul qilinadi!")
    }
    

    async create(payload:ImageCreateDto,image:Express.Multer.File){
        await this.tekshir(payload)
        this.isPic(image)
        payload.image=image.path
        
        return await super.baseCreate(payload as ImageEntity)

    }

    async update(id:number,payload:ImageUpdateDto,image?:Express.Multer.File){
        await this.tekshir(payload)
        this.isPic(image)
        if(image)  payload.image=image.path
        const img=await this.repo.findOneBy({id})
        if(!img) throw new NotFoundException("Bunday idli rasm topilmadi!")

        const pay=super.update_merge(img,payload)
        
        return await super.baseCreate(payload as ImageEntity)

    }

    

}