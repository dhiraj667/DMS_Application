import Joi from 'joi';

import ObjectId from 'joi-objectid';
const JoiObjectId = ObjectId(Joi);

const attrs={
    firstName: Joi.string().min(5).max(50).required(),
    lastName: Joi.string().min(5).max(50).required(),
    userName: Joi.string().min(5).max(50).required(),
    email:Joi.string().min(5).max(255).required(),
    password:Joi.string().min(8).max(1024).required(),
    phone:Joi.string().min(10).max(10).required(),
    departments:Joi.array().required(),
    role:Joi.string().min(5).max(50).required(),
    isActive:Joi.boolean().default(false),
}

export const userSchema = Joi.object(attrs);