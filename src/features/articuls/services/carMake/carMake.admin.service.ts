import { BadRequestException, Injectable, NotFoundException } from "@nestjs/common";

import ServiceHelper from "@/core/services/service.helper";
import { ArticulEntity } from "../../entities/articul.entity";
import { ArticulRepository } from "../../repository/articul.repo";
import { ArticulCreateAdmin } from "../../dtos/articul/admin/articul.create.admin.dto";
import { ArticulUpdateAdmin } from "../../dtos/articul/admin/articul.update.admin.dto";
import { CarMakeEntity } from "../../entities/carMake.entity";
import { CarMakeRepository } from "../../repository/carMake.repo";
import { CarMakeCreateDto } from "../../dtos/carMake/admin/carMake.create.dto";
import { CarMakeUpdateDto } from "../../dtos/carMake/admin/carMake.update.dto";


const message404 = "Bunday idli branch topilmadi!"



@Injectable()
export class CarMakeAdminService extends ServiceHelper<CarMakeEntity> {

    constructor(
        protected readonly repo: CarMakeRepository
    ) {
        super()
    }
}