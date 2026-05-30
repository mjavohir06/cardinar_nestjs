import { Module } from '@nestjs/common';
import { StaticModule } from './features/static/Static.module';
import { APP_GUARD } from '@nestjs/core';
import { AuthenticationGuard } from './core/guards/authentication.guard';
import { RolesGuard } from './core/guards/roles.guard';
import { JwtModule } from '@nestjs/jwt';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { configModuleOptions } from './configs/env.config';
import { typeOrmConfig } from './configs/type-orm.config';
import { jwtModuleConfig } from './configs/jwt-module.config';
import OrderModule from './features/orders/order.module';
import { MailModule } from './core/mail/mail.module';
import AuthenticationModule from './features/authentication/authentication.module';
import {ScheduleModule} from "@nestjs/schedule"
import CommonsModule from './features/commons/commons.module';
import ProductModule from './features/production/product.module';
import ArticulModule from './features/articuls/articul.module';


@Module({
  providers: [
    { provide: APP_GUARD, useClass: AuthenticationGuard },
    { provide: APP_GUARD, useClass: RolesGuard },
  ],
  imports: [
    JwtModule.register(jwtModuleConfig),
    TypeOrmModule.forRoot(typeOrmConfig),
    ConfigModule.forRoot(configModuleOptions),
    ScheduleModule.forRoot(),
    AuthenticationModule,
    StaticModule,
    OrderModule,
    MailModule,
    CommonsModule,
    ProductModule,
    ArticulModule
  ],
})
export class AppModule {}
