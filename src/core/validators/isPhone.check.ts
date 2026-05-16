
import { registerDecorator, ValidationOptions, ValidationArguments } from 'class-validator';

export function IsUzbekPhone(validationOptions?: ValidationOptions) {
    return function (object: Object, propertyName: string) {
        registerDecorator({
            name: 'isUzbekPhone',
            target: object.constructor,
            propertyName: propertyName,
            options: {
                message: 'Telefon raqam +998XXXXXXXXX formatida bo\'lishi kerak',
                ...validationOptions
            },
            validator: {
                validate(value: any, args: ValidationArguments) {
                    if (typeof value !== 'string') return false
                    return /^\+998[0-9]{9}$/.test(value)
                }
            }
        })
    }
}