
import { Controller, Get,  } from "@nestjs/common";
import {  ApiOkResponse, ApiTags } from "@nestjs/swagger";
import { PhoneNumberPublicService } from "../../services/phoneNumber/PhoneNumber.public.service";
import { PhoneNumberListPublicDto } from "../../dtos/public/phoneNumber/phoneNumber.list.dto";
import { StaticInfoPublicService } from "../../services/staticInfo/staticInfo.public.service";
import { StaticInfoPublicListDto } from "../../dtos/public/staticInfo/staticInfo.list.dto";



@ApiTags('StaticInfo - Public')
@Controller('public/staticInfo')
export class StaticInfoPublicController {
  constructor(private readonly service:StaticInfoPublicService ) { }

  @Get()
  @ApiOkResponse({type:StaticInfoPublicListDto})
  async getAll() {
    const result=await this.service.getAll()
    return result
  }
}
