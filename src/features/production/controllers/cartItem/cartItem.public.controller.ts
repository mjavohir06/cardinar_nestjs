
import { Controller, Get,  } from "@nestjs/common";
import { ApiOkResponse, ApiTags } from "@nestjs/swagger";
import { CartItemPublicListDto } from "../../dtos/cartItem/public/cartItem.list.dto";
import { CartItemPublicService } from "../../services/cartItem/cartItem.public.service";





@ApiTags('CartItem - Public')
@Controller('public/cartItem')
export class CartItemPublicController {
  constructor(private readonly service: CartItemPublicService) { }


  @Get()
  @ApiOkResponse({type:CartItemPublicListDto,isArray:true})
  async getAll() {
    const result=await this.service.getAllWithNothing<CartItemPublicListDto>(CartItemPublicListDto)
    return result
  }

}
