import { FindOptionsRelations, FindOptionsWhere, QueryFailedError } from "typeorm";
import { BaseRepository } from "../repository/BaseRepository";
import { BadRequestException, NotFoundException, UnauthorizedException } from "@nestjs/common";
import { BaseModel } from "../base-model.entity";
import { SearchFilters } from "../filters/search.filters";
import { PaginationFilters } from "../filters/pagination.filters";
import { plainToInstance } from "class-transformer";
import { ClassConstructor } from "class-transformer"
import { Request } from "express";

interface optionsType {
    not?: string[]
    ILike?: string[]
}

export default abstract class ServiceHelper<Entity extends BaseModel> {

    protected readonly abstract repo: BaseRepository<Entity>




    protected update_merge(entity: Entity, payload: Object) {
        return Object.assign(
            entity,
            Object.fromEntries(Object.entries(payload).filter(([_, value]) => value !== null && value !== undefined))
        ) as Entity
    }

    protected async foundEntityAndCheck({ where, options, message = "Ma'lumot mavjud emas!" }: { where: FindOptionsWhere<Entity>, message?: string, options?: optionsType }) {
        const entity = await this.repo.findOneBy(where, options)
        if (!entity) throw new NotFoundException(message)
        return entity
    }

    protected async user(req: Request) {
        const user = req.user
        if (!user) throw new UnauthorizedException("Siz ro'yhatdan o'tmagansiz!")
        return user
    }










    async baseUpdate<Dto extends Object>(id: number, payload: Dto, message?: string) {
        const entity = await this.foundEntityAndCheck({ where: { id } as FindOptionsWhere<Entity>, message })
        const newEntity = this.update_merge(entity, payload)

        try {
            return await this.repo.save(newEntity)
        } catch {
            throw new BadRequestException()
        }
    }

    async baseDelete(id: number, message?: string, mEtity: string = "entity") {
        const entity = await this.foundEntityAndCheck({ where: { id } as FindOptionsWhere<Entity>, message })
        try {
            const removeE = await this.repo.remove(entity)
            return removeE
        }
        catch (err) {
            if (err instanceof QueryFailedError) {
                // detail: 'Key (categoryId)=(1) is still referenced from table "books".'
                console.log(err.driverError.detail)

                // book id ni olish
                const match = err.driverError.detail?.match(/\((\d+)\)/)
                const bookId = match ? match[1] : null

                const tableMatch =
                    err.driverError.detail?.match(/table "(.+?)"/)

                const tableName = tableMatch
                    ? tableMatch[1]
                    : null

                throw new BadRequestException(
                    `Bu ${mEtity} ${bookId ? `(${tableName??"schema"} id: ${bookId})` : ("biror " + (tableName??"schema"))} ga ulangan, o'chirib bo'lmaydi!`
                )
            }
            throw new BadRequestException("O'chirib bo'lmadi!")
        }
    }

    /**
     * 
     * @param filters SearchFilters
     * @param ListDto List dtolar
     * @param search title,fullName,...
     * @param relations {} ichida true/false bilan
     */

    async getAllWithNothing<Dto extends Object>(ListDto: ClassConstructor<Dto>, relations?: FindOptionsRelations<Entity>) {
        const result = await this.repo.find({}, relations)
        return plainToInstance(ListDto, result, { excludeExtraneousValues: true }) as []

    }


    async getAllWithSearch<Dto extends Object>(filters: SearchFilters, ListDto: ClassConstructor<Dto>, search: keyof Entity, relations?: FindOptionsRelations<Entity>) {
        return await this.repo.getAllWithSearch(filters, ListDto, search, relations)
    }


    async getAllWithFilters<Dto extends Object>(filters: PaginationFilters, ListDto: ClassConstructor<Dto>, relations?: FindOptionsRelations<Entity>) {
        const result = await this.repo.getAll(filters)
        result.data = plainToInstance(ListDto, result.data, { excludeExtraneousValues: true }) as []
        return result
    }


    async baseCreate(payload: Entity) {
        try {
            return await this.repo.save(payload)
        }
        catch (err) {
            if (err instanceof Error) throw new BadRequestException(err.message)
            throw new BadRequestException()
        }

    }
}