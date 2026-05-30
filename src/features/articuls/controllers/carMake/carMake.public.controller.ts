
import { Controller, Get, Query,  } from "@nestjs/common";
import { ApiOkResponse, ApiTags } from "@nestjs/swagger";
import { SearchFilters } from "@/core/filters/search.filters";import { CarMakePublicService } from "../../services/carMake/carMake.public.service";
import { CarMakePublicListDto } from "../../dtos/carMake/public/carMake.list.dto";
;





@ApiTags('CarMake - Public')
@Controller('public/carMake')
export class CarMakePublicController {
  constructor(private readonly service: CarMakePublicService) { }


  @Get()
    @ApiOkResponse({type:CarMakePublicListDto,isArray:true})
    async getAll(@Query() filter:SearchFilters) {
      const result=await this.service.getAllWithSearch<CarMakePublicListDto>(filter,CarMakePublicListDto,"title")
      return result
    }

}
