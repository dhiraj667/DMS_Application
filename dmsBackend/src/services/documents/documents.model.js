import Joi from 'joi'
import ObjectId from 'joi-objectid'
const JoiObjectId=ObjectId(Joi)

const attrs = {
    name:Joi.string().min(3).max(50).required(),
    path:Joi.string().min(5).max(500).required(),
    
}

export const documentsSchema = Joi.object(attrs)