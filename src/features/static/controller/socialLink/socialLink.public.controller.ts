
import { Controller, Get, Req,  } from "@nestjs/common";
import {  ApiOkResponse, ApiTags } from "@nestjs/swagger";
import getFullPath from "@/core/utils/get-full-path";
import type{ Request } from "express";
import { SocialLinkPublicListDto } from "../../dtos/public/socialLink/socialLink.list.dto";
import { SocialLinkPublicService } from "../../services/socialLink/socialLink.public.service";



@ApiTags('SocialLink - Public')
@Controller('public/socialLink')
export class SocialLinkPublicController {
  constructor(private readonly service:SocialLinkPublicService ) { }

  @Get()
  @ApiOkResponse({type:SocialLinkPublicListDto,isArray:true})
  async getAll(@Req() req:Request) {
    const result=await this.service.getAll()
    result.forEach((item) => (item.icon = getFullPath(req, item.icon)))
    return result
  }
}
