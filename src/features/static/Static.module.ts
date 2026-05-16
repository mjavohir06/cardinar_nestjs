import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { BannerEntity } from "./entities/banner.entity";
import { PhoneNumberEntity } from "./entities/phoneNumber.entity";
import { SocialLinkEntity } from "./entities/socialLink.entity";
import { StaticInfoEntity } from "./entities/staticInfo.entity";
import { BannerRepository } from "./repositories/banner.repository";
import { SocialLinkRepository } from "./repositories/socialLink.repository";
import { StaticInfoRepository } from "./repositories/staticInfo.repository";
import { BannerAdminController } from "./controller/banner/banner.admin.controller";
import { BannerAdminService } from "./services/banner/Banner.admin.service";
import { BannerPublicController } from "./controller/banner/banner.public.controller";
import { BannerPublicService } from "./services/banner/Banner.public.service";
import { PhoneNumberAdminController } from "./controller/phoneNumber/phoneNumber.admin.controller";
import { PhoneNumberPublicController } from "./controller/phoneNumber/phoneNumber.public.controller";
import { PhoneNumberAdminService } from "./services/phoneNumber/PhoneNumber.admin.service";
import { PhoneNumberPublicService } from "./services/phoneNumber/PhoneNumber.public.service";
import { PhoneNumberRepository } from "./repositories/phoneNumber.repository";
import { SocialLinkAdminService } from "./services/socialLink/socialLink.admin.service";
import { SocialLinkPublicService } from "./services/socialLink/socialLink.public.service";
import { SocialLinkAdminController } from "./controller/socialLink/socialLink.admin.controller";
import { SocialLinkPublicController } from "./controller/socialLink/socialLink.public.controller";
import { StaticInfoAdminService } from "./services/staticInfo/staticInfo.admin.service";
import { StaticInfoPublicService } from "./services/staticInfo/staticInfo.public.service";
import { StaticInfoAdminController } from "./controller/staticInfo/staticInfo.admin.controller";
import { StaticInfoPublicController } from "./controller/staticInfo/staticInfo.public.controller";


@Module({
    imports:[
        TypeOrmModule.forFeature([BannerEntity,PhoneNumberEntity,SocialLinkEntity,StaticInfoEntity])
    ],
    controllers:[
        BannerAdminController,
        BannerPublicController,
        PhoneNumberAdminController,
        PhoneNumberPublicController,
        SocialLinkAdminController,
        SocialLinkPublicController,
        StaticInfoAdminController,
        StaticInfoPublicController
        
    ],
    providers:[
        BannerAdminService,
        BannerPublicService,
        PhoneNumberAdminService,
        PhoneNumberPublicService,
        SocialLinkAdminService,
        SocialLinkPublicService,
        StaticInfoAdminService,
        StaticInfoPublicService,

        // repository
        BannerRepository,
        PhoneNumberRepository,
        SocialLinkRepository,
        StaticInfoRepository
    ]
})

export class StaticModule{}