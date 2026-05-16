
import { Controller, Get,  Query, Req,  } from "@nestjs/common";
import {  ApiOkResponse, ApiTags } from "@nestjs/swagger";
import { SearchFilters } from "@/core/filters/search.filters";
import { PaginatedResultDto } from "@/core/paginated-result.dto";
import getFullPath from "@/core/utils/get-full-path";
import type{ Request } from "express";
import { BannerPublicService } from "../../services/banner/Banner.public.service";
import { BannerPublicListDto } from "../../dtos/public/banner/banner.list.dto";



@ApiTags('Banner - Public')
@Controller('public/banner')
export class BannerPublicController {
  constructor(private readonly service:BannerPublicService ) { }

  @Get()
  @ApiOkResponse({type:PaginatedResultDto(BannerPublicListDto)})
  async getAll(@Query() filters: SearchFilters,@Req() req:Request) {
    const result=await this.service.getAll(filters)
    result.data.forEach((item) => (item.image = getFullPath(req, item.image)))
    return result
  }
}
