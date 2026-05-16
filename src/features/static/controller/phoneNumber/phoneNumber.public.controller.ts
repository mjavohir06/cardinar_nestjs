
import { Controller, Get,  } from "@nestjs/common";
import {  ApiOkResponse, ApiTags } from "@nestjs/swagger";
import { PhoneNumberPublicService } from "../../services/phoneNumber/PhoneNumber.public.service";
import { PhoneNumberListPublicDto } from "../../dtos/public/phoneNumber/phoneNumber.list.dto";



@ApiTags('PhoneNumber - Public')
@Controller('public/phoneNumber')
export class PhoneNumberPublicController {
  constructor(private readonly service:PhoneNumberPublicService ) { }

  @Get()
  @ApiOkResponse({type:PhoneNumberListPublicDto,isArray:true})
  async getAll() {
    const result=await this.service.getAll()
    return result
  }
}
