
import { Controller, Get, Query,  } from "@nestjs/common";
import { ApiOkResponse, ApiTags } from "@nestjs/swagger";
import { ArticulPublicService } from "../../services/articul/articul.public.service";
import { PaginationFilters } from "@/core/filters/pagination.filters";
import { ArticulPublicListDto } from "../../dtos/articul/public/articul.list.dto";





@ApiTags('Articul - Public')
@Controller('public/articul')
export class ArticulPublicController {
  constructor(private readonly service: ArticulPublicService) { }


  @Get()
    @ApiOkResponse({type:ArticulPublicListDto,isArray:true})
    async getAll(@Query() filter:PaginationFilters) {
      const result=await this.service.getAllWithFilters<ArticulPublicListDto>(filter,ArticulPublicListDto)
      return result
    }

}
