import Joi from 'joi';

const loginSchema: Joi.Schema = Joi.object({
  username: Joi.string().required(),
  password: Joi.string().required(),
});

const productSchema: Joi.Schema = Joi.object({
  name: Joi.string().min(3).required(),
  amount: Joi.string().min(3).required(),
});

const userSchema: Joi.Schema = Joi.object({
  username: Joi.string().min(3).required(),
  classe: Joi.string().min(3).required(),
  level: Joi.number().min(1).required(),
  password: Joi.string().min(8).required(),
});

export { loginSchema, productSchema, userSchema };
