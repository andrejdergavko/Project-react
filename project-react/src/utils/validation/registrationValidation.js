import { isStringLength, isNotEmpty } from "./validator";

const schema = {
  email: [
    {
      validate: value => isStringLength(value, 1, 100),
      message: "Пожалуйста, укажите email"
    }
  ],

  password: [
    {
      validate: value => isNotEmpty(value),
      message: "Пожалуйста, укажите пароль"
    },
    {
      validate: value => isStringLength(value, 6, 100),
      message: "Длинна пароля должна быль не мение 6 символов"
    }
  ],

  currency: [
    {
      validate: value => isNotEmpty(value),
      message: "Пожалуйста, укажите валюту"
    }
  ]
};

export function validate(fields) {
  const errorMessages = [];

  fields.forEach(field => {
    const fieldValidationSchema = schema[field.name];
    if (fieldValidationSchema) {
      fieldValidationSchema.forEach(item => {
        if (!item.validate(field.value)) {
          errorMessages.push(item.message);
        }
      });
    }
  });

  return errorMessages;
}
