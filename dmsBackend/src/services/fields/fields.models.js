import Joi from 'joi';

const attrs = {
    name : Joi.string().required()
}

export const fieldsSchema = Joi.object(attrs);
