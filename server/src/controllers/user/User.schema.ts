import Joi from "@hapi/joi";

export const UserSchema = Joi.object({
  // TODO: can add email option to username?
  username: Joi.string().required(),
  password: Joi.string().required()
})