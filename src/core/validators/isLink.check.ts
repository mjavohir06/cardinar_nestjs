import { registerDecorator, ValidationOptions, ValidationArguments } from 'class-validator';

export function IsLink(validationOptions?: ValidationOptions) {
    return function (object: Object, propertyName: string) {
        registerDecorator({
            name: 'isLink',
            target: object.constructor,
            propertyName: propertyName,
            options: {
                message: 'Havola to\'g\'ri URL formatida bo\'lishi kerak (https://example.com)',
                ...validationOptions
            },
            validator: {
                validate(value: any, args: ValidationArguments) {
                    if (typeof value !== 'string') return false
                    return /^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)$/.test(value)
                }
            }
        })
    }
}