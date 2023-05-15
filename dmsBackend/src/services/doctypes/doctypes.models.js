import Joi from "joi"

import ObjectId from 'joi-objectid';
const JoiObjectId = ObjectId(Joi);

const attrs = {
    name: Joi.string().min(5).max(50).required(),
    docTypeCode: Joi.string().required(),
    department: JoiObjectId().required()
}

export const doctypesSchema = Joi.object(attrs);