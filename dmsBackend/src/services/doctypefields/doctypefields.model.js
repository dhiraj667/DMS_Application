import Joi from 'joi'
import ObjectId from 'joi-objectid'
const JoiObjectId=ObjectId(Joi)

const attrs = {
    doctype:JoiObjectId().required(),
    field:JoiObjectId().required(),
    isRequired:Joi.boolean()
}

export const doctypefieldsSchema = Joi.object(attrs)