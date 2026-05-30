
import { Controller, Get, Param, Query, Req,  } from "@nestjs/common";
import { ApiOkResponse, ApiTags } from "@nestjs/swagger";
import { ImagePublicListDto } from "../../dtos/image/public/image.list.dto";
import { PaginationFilters } from "@/core/filters/pagination.filters";
import { PaginatedResultDto } from "@/core/paginated-result.dto";
import { ImagePublicService } from "../../services/image/image.public.service";
import type{ Request } from "express";
import getFullPath from "@/core/utils/get-full-path";





@ApiTags('Image - Public')
@Controller('public/image')
export class ImagePublicController {
  constructor(private readonly service: ImagePublicService) { }


  @Get()
  @ApiOkResponse({type:PaginatedResultDto(ImagePublicListDto)})
  async getAll(@Req() req:Request,@Query() filter:PaginationFilters) {
    const result=await this.service.getAllWithFilters<ImagePublicListDto>(filter,ImagePublicListDto)
    result.data.forEach((item) => (item.image = getFullPath(req, item.image)))
    return result
  }

}
