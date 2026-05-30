
import { Controller, Get, Query,  } from "@nestjs/common";
import { ApiOkResponse, ApiTags } from "@nestjs/swagger";
import { CartItemPublicListDto } from "../../dtos/cartItem/public/cartItem.list.dto";
import { CartItemPublicService } from "../../services/cartItem/cartItem.public.service";
import { ProductPublicService } from "../../services/product/product.public.service";
import { SearchFilters } from "@/core/filters/search.filters";
import { ProductPublicListDto } from "../../dtos/product/public/product.list.dto";





@ApiTags('Product - Public')
@Controller('public/product')
export class ProductPublicController {
  constructor(private readonly service: ProductPublicService) { }


  @Get()
    @ApiOkResponse({type:ProductPublicListDto,isArray:true})
    async getAll(@Query() filter:SearchFilters) {
      const result=await this.service.getAllWithSearch<ProductPublicListDto>(filter,ProductPublicListDto,"title")
      return result
    }

}
