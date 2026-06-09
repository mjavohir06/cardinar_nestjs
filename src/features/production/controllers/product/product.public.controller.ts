
import { Controller, Get, Param, Query, Req, } from "@nestjs/common";
import { ApiOkResponse, ApiTags } from "@nestjs/swagger";
import { CartItemPublicListDto } from "../../dtos/cartItem/public/cartItem.list.dto";
import { CartItemPublicService } from "../../services/cartItem/cartItem.public.service";
import { ProductPublicService } from "../../services/product/product.public.service";
import { SearchFilters } from "@/core/filters/search.filters";
import { ProductPublicListDto } from "../../dtos/product/public/product.list.dto";
import { PaginatedResultDto } from "@/core/paginated-result.dto";
import { PaginationFilters } from "@/core/filters/pagination.filters";
import type{ Request } from "express";
import getFullPath from "@/core/utils/get-full-path";
import { ProductPublicPremiumDto } from "../../dtos/product/public/product.premium.dto";
import { ProductPublicTovarDto } from "../../dtos/product/public/product.tovar.dto";
import { ProductDetailDto } from "../../dtos/product/public/product.detail.dto";
import { ProductFilters } from "@/core/filters/product.filter";





@ApiTags('Product - Public')
@Controller('public/product')
export class ProductPublicController {
  constructor(private readonly service: ProductPublicService) { }

  @Get("one/:id")
  @ApiOkResponse({type:ProductDetailDto})
  async getOne(@Req() req:Request,@Param("id") id:number) {
    const result = await this.service.getOne(id)
    result.images?.forEach((img)=>img.image=getFullPath(req,img.image))
    return result
  }

  @Get()
  @ApiOkResponse({ type: PaginatedResultDto(ProductPublicListDto) })
  async getAll(@Query() filter: SearchFilters) {
    const result = await this.service.getAllWithSearch<ProductPublicListDto>(filter, ProductPublicListDto, "title")
    return result
  }

  @Get("premiums")
  @ApiOkResponse({ type: PaginatedResultDto(ProductPublicPremiumDto) })
  async getPremium(@Req() req:Request,@Query() filter: PaginationFilters) {
    const result = await this.service.getPremium(filter)
    result.data.forEach((item:ProductPublicPremiumDto) => (item.image = item.image?getFullPath(req, item.image):undefined))
    return result
  }

  @Get("tovars")
  @ApiOkResponse({ type: PaginatedResultDto(ProductPublicTovarDto) })
  async getTovars(@Req() req:Request,@Query() filter: PaginationFilters) {
    const result = await this.service.getTovars(filter)
    result.data.forEach((item:ProductPublicTovarDto) => (item.image = item.image?getFullPath(req, item.image):undefined))
    return result
  }

  @Get("tovarsshop")
  @ApiOkResponse({ type: PaginatedResultDto(ProductPublicTovarDto) })
  async getTovarsId(@Req() req:Request,@Query() filter: ProductFilters) {
    const result = await this.service.getTovarsId(filter)
    result.data.forEach((item:ProductPublicTovarDto) => (item.image = item.image?getFullPath(req, item.image):undefined))
    return result
  }

}
