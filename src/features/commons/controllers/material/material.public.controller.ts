
import { Controller, Get,  } from "@nestjs/common";
import { ApiOkResponse, ApiTags } from "@nestjs/swagger";
import { MaterialPublicService } from "../../services/material/material.public.service";
import { MaterialPublicListDto } from "../../dtos/material/public/material.list.dto";





@ApiTags('Material - Public')
@Controller('public/material')
export class MAterialPublicController {
  constructor(private readonly service: MaterialPublicService) { }


  @Get()
  @ApiOkResponse({type:MaterialPublicListDto,isArray:true})
  async getAll() {
    const result=await this.service.getAllWithNothing<MaterialPublicListDto>(MaterialPublicListDto)
    return result
  }

}
