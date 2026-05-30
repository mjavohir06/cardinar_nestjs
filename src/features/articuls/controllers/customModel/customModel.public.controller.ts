
import { Controller, Get, Param, Query, Req,  } from "@nestjs/common";
import { ApiOkResponse, ApiTags } from "@nestjs/swagger";
import { PaginationFilters } from "@/core/filters/pagination.filters";
import { PaginatedResultDto } from "@/core/paginated-result.dto";
import type{ Request } from "express";
import getFullPath from "@/core/utils/get-full-path";
import { CustomModelPublicService } from "../../services/customModel/customModel.public.service";
import { CustomModelPublicListDto } from "../../dtos/customModel/public/cModel.list.dto";






@ApiTags('CustomModel - Public')
@Controller('public/customModel')
export class CustomModelPublicController {
  constructor(private readonly service: CustomModelPublicService) { }


  @Get()
  @ApiOkResponse({type:PaginatedResultDto(CustomModelPublicListDto)})
  async getAll(@Req() req:Request,@Query() filter:PaginationFilters) {
    const result=await this.service.getAllWithFilters<CustomModelPublicListDto>(filter,CustomModelPublicListDto)
    result.data.forEach((item) => (item.image = getFullPath(req, item.image)))
    return result
  }

}
