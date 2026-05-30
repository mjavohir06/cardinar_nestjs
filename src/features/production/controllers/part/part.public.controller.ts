
import { Controller, Get, Param, Query, Req,  } from "@nestjs/common";
import { ApiOkResponse, ApiTags } from "@nestjs/swagger";
import { PaginationFilters } from "@/core/filters/pagination.filters";
import { PaginatedResultDto } from "@/core/paginated-result.dto";
import type{ Request } from "express";
import getFullPath from "@/core/utils/get-full-path";
import { PartPublicService } from "../../services/part/part.public.service";
import { PartPublicListDto } from "../../dtos/part/public/part.list.dto";





@ApiTags('Part - Public')
@Controller('public/part')
export class PartPublicController {
  constructor(private readonly service: PartPublicService) { }


  @Get()
  @ApiOkResponse({type:PaginatedResultDto(PartPublicListDto)})
  async getAll(@Req() req:Request,@Query() filter:PaginationFilters) {
    const result=await this.service.getAllWithFilters<PartPublicListDto>(filter,PartPublicListDto)
    result.data.forEach((item) => (item.image = getFullPath(req, item.image)))
    return result
  }

}
