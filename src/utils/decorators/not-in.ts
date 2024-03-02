/*@Transform 내에서 예외를 던지지 않고 직접 커스텀 유효성 검사를 생성.
nest에서 지원하는 기술이 아닌 class-validator의 영역.
*/
import {
  registerDecorator,
  ValidationOptions,
  ValidationArguments,
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from 'class-validator';

export function NotIn(property: string, validationOptions?: ValidationOptions) {
  return (object: Object, propertyName: string) => {
    registerDecorator({
      name: 'NotIn',
      target: object.constructor,
      propertyName,
      options: validationOptions,
      constraints: [property],
      validator: {
        validate(value: any, args: ValidationArguments) {
          const [relatedPropertyName] = args.constraints;
          const relatedValue = (args.object as any)[relatedPropertyName];
          return (
            typeof value === 'string' &&
            typeof relatedValue === 'string' &&
            !relatedValue.includes(value)
          );
        },
      },
    });
  };
}
