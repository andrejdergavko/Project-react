import { isStringLength } from "./validator";

const schema = {
  sum: [
    {
      validate: value => isStringLength(value, 1, 100),
      message: "Пожалуйста, укажите значение"
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
