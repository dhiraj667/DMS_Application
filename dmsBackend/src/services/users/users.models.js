import Joi from 'joi';

import ObjectId from 'joi-objectid';
const JoiObjectId = ObjectId(Joi);

const attrs={
    firstname: Joi.string().min(5).max(50).required(),
    lastname: Joi.string().min(5).max(50).required(),
    username: Joi.string().min(5).max(50).required(),
    email:Joi.string().min(5).max(255).required(),
    password:Joi.string().min(5).max(1024).required(),
    phone:Joi.string().min(5).max(50).required(),
    departments:JoiObjectId().required(),
    role:Joi.string().min(5).max(50).required(),
    isActive:Joi.boolean().default(false),
}

export const userSchema = Joi.object(attrs);