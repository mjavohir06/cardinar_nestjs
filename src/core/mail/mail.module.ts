// mail.module.ts
import { MailerModule } from '@nestjs-modules/mailer';
import { Module } from '@nestjs/common';

@Module({
    imports: [
        MailerModule.forRoot({
            transport: {
                host: 'smtp.gmail.com',
                port: 587,
                secure: false,
                auth: {
                    user: process.env.MAIL_USER,    // gmail
                    pass: process.env.MAIL_PASS     // app password
                }
            },
            defaults: {
                from: '"Cardinar" <noreply@cardinar.uz>'
            }
        })
    ]
})
export class MailModule {}