import { Controller, Get } from "@nestjs/common";
import { BranchPublicService } from "../../services/branch/branch.public.service";
import { ApiOkResponse, ApiTags } from "@nestjs/swagger";
import { BranchPublicListDto } from "../../dtos/branch/public/branch.list.dto";


@ApiTags('Branch - Public')
@Controller('public/branch')
export default class BranchPublicController{
    constructor(
        private readonly service:BranchPublicService
    ){}

    @Get()
    @ApiOkResponse({type:BranchPublicListDto,isArray:true})
    async getAll(){
        return await this.service.getAllWithNothing<BranchPublicListDto>(BranchPublicListDto)
    }

}