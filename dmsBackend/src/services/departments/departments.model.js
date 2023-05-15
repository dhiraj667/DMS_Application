import Joi from 'joi'
const attrs = {
  name: Joi.string().min(3).max(50).required(),
  departmentCode: Joi.string().min(2).max(50).required(),
}

export const departmentsSchema = Joi.object(attrs)