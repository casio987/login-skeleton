import Joi from "joi";

export const SignUpSchema = Joi.object({
  // TODO: can add email option to username?
  username: Joi.string().required(),
  password: Joi.string().required()
});

export const LoginSchema = Joi.object({
  username: Joi.string().required(),
  password: Joi.string()
});

