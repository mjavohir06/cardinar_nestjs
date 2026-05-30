
import { Controller, Get, Query,  } from "@nestjs/common";
import { ApiOkResponse, ApiTags } from "@nestjs/swagger";;
import { SearchFilters } from "@/core/filters/search.filters";
import { CarModelPublicService } from "../../services/carModel/carModel.public.service";
import { CarModelPublicListDto } from "../../dtos/carModel/public/carModel.list.dto";





@ApiTags('CarModel - Public')
@Controller('public/carModel')
export class CarModelPublicController {
  constructor(private readonly service: CarModelPublicService) { }


  @Get()
    @ApiOkResponse({type:CarModelPublicListDto,isArray:true})
    async getAll(@Query() filter:SearchFilters) {
      const result=await this.service.getAllWithSearch<CarModelPublicListDto>(filter,CarModelPublicListDto,"title")
      return result
    }

}
