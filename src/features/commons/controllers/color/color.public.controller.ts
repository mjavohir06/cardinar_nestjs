
import { Controller, Get,  } from "@nestjs/common";
import { ApiOkResponse, ApiTags } from "@nestjs/swagger";
import { ColorPublicListDto } from "../../dtos/color/public/color.list.dto";
import { ColorPublicService } from "../../services/color/color.public.service";





@ApiTags('Color - Public')
@Controller('public/color')
export class ColorPublicController {
  constructor(private readonly service: ColorPublicService) { }


  @Get()
  @ApiOkResponse({type:ColorPublicListDto,isArray:true})
  async getAll() {
    const result=await this.service.getAllWithNothing<ColorPublicListDto>(ColorPublicListDto)
    return result
  }

}
