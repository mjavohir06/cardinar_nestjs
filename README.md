# Cardinar — backend

[Cardinar.uz](https://cardinar.uz) avto gilamcha va avto qoplamalar onlayn do'koni uchun REST API.
Frontend: [cardinar_nextjs](https://github.com/mjavohir06/cardinar_nextjs)

**Texnologiyalar:** NestJS, TypeORM, PostgreSQL, JWT, CQRS, Swagger, Nodemailer, Socket.IO

## Modullar
- `authentication` — ro'yxatdan o'tish, kirish, JWT, parol (argon2)
- `articuls` — mahsulot artikullari
- `orders` — buyurtmalar
- `production` — ishlab chiqarish jarayoni
- `static` — statik ma'lumotlar va fayllar
- Email xabarnomalar va rejali vazifalar (`@nestjs/schedule`)

API hujjatlari ishga tushgandan keyin Swagger'da ochiladi.

## Ishga tushirish

```bash
npm install
# .env fayl yarating: PostgreSQL ulanishi va JWT kalitlari
npm run start:dev
```
