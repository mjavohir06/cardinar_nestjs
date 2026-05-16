import { Injectable } from "@nestjs/common"
import { Cron } from "@nestjs/schedule"
import { InjectRepository } from "@nestjs/typeorm"
import { LessThan, Repository } from "typeorm"
import { OtpCodeEntity } from "../entities/otpCode.entity"


@Injectable()
export class CleanupService {

 constructor(
  @InjectRepository(OtpCodeEntity)
  private readonly repo: Repository<OtpCodeEntity>
 ) {}

 
}