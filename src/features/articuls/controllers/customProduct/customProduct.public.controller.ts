
import { Controller, Get, Param, Query, Req,  } from "@nestjs/common";
import { ApiOkResponse, ApiTags } from "@nestjs/swagger";
import { PaginationFilters } from "@/core/filters/pagination.filters";
import { PaginatedResultDto } from "@/core/paginated-result.dto";
import type{ Request } from "express";
import getFullPath from "@/core/utils/get-full-path";
import { CustomProductPublicService } from "../../services/customProduct/customProduct.public.service";
import { CustomProductPublicListDto } from "../../dtos/customProduct/public/cProduct.list.dto";






@ApiTags('CustomProduct - Public')
@Controller('public/customProduct')
export class CustomProductPublicController {
  constructor(private readonly service: CustomProductPublicService) { }


  @Get()
  @ApiOkResponse({type:PaginatedResultDto(CustomProductPublicListDto)})
  async getAll(@Req() req:Request,@Query() filter:PaginationFilters) {
    const result=await this.service.getAllWithFilters<CustomProductPublicListDto>(filter,CustomProductPublicListDto)
    result.data.forEach((item) => (item.image = getFullPath(req, item.image)))
    return result
  }

}
