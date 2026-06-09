// validators/isHexColor.check.ts
import { registerDecorator, ValidationOptions, ValidationArguments } from 'class-validator';

export function IsHexColor(validationOptions?: ValidationOptions) {
    return function (object: Object, propertyName: string) {
        registerDecorator({
            name: 'isHexColor',
            target: object.constructor,
            propertyName: propertyName,
            options: {
                message: 'Color #RGB yoki #RRGGBB formatida bo\'lishi kerak',
                ...validationOptions
            },
            validator: {
                validate(value: any, args: ValidationArguments) {
                    if (typeof value !== 'string') return false
                    return /^#([0-9A-Fa-f]{3}|[0-9A-Fa-f]{6})$/.test(value)
                }
            }
        })
    }
}