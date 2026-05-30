
import { Controller, Get,  } from "@nestjs/common";
import { ApiOkResponse, ApiTags } from "@nestjs/swagger";
import { CategoryPublicService } from "../../services/category/category.public.service";
import { CategoryPublicListDto } from "../../dtos/category/public/category.list.dto";





@ApiTags('Category - Public')
@Controller('public/category')
export class CategoryPublicController {
  constructor(private readonly service: CategoryPublicService) { }


  @Get()
  @ApiOkResponse({type:CategoryPublicListDto,isArray:true})
  async getAll() {
    const result=await this.service.getAllWithNothing<CategoryPublicListDto>(CategoryPublicListDto)
    return result
  }

}
