// For more information about this file see https://dove.feathersjs.com/guides/cli/service.schemas.html
import { resolve, getValidator, querySyntax } from '@feathersjs/schema'
import { ObjectIdSchema } from '@feathersjs/schema'
import { dataValidator, queryValidator } from '../../validators.js'

// Main data model schema
export const documentsSchema = {
  $id: 'Documents',
  type: 'object',
  additionalProperties: false,
  required: ['_id', 'name', 'path', 'indexingInfo', 'dcn', 'date', 'driveFile_Id'],
  // required: ['_id', 'name', 'path'],
  properties: {
    _id: ObjectIdSchema(),
    name: { type: 'string' },
    path: { type: 'string' },
    indexingInfo: { type: 'object' },
    dcn: { type: 'string' },
    date: { type: 'object' },
    driveFile_Id: { type: 'string' }
  }
}
export const documentsValidator = getValidator(documentsSchema, dataValidator)
export const documentsResolver = resolve({})

export const documentsExternalResolver = resolve({})

// Schema for creating new data
export const documentsDataSchema = {
  $id: 'DocumentsData',
  type: 'object',
  additionalProperties: false,
  required: ['name', 'path', 'indexingInfo', 'dcn', 'date', 'driveFile_Id'],
  // required: ['name', 'path'],
  properties: {
    ...documentsSchema.properties
  }
}
export const documentsDataValidator = getValidator(documentsDataSchema, dataValidator)
export const documentsDataResolver = resolve({})

// Schema for updating existing data
export const documentsPatchSchema = {
  $id: 'DocumentsPatch',
  type: 'object',
  additionalProperties: false,
  required: [],
  properties: {
    ...documentsSchema.properties
  }
}
export const documentsPatchValidator = getValidator(documentsPatchSchema, dataValidator)
export const documentsPatchResolver = resolve({})

// Schema for allowed query properties
export const documentsQuerySchema = {
  $id: 'DocumentsQuery',
  type: 'object',
  additionalProperties: false,
  properties: {
    ...querySyntax(documentsSchema.properties)
  }
}
export const documentsQueryValidator = getValidator(documentsQuerySchema, queryValidator)
export const documentsQueryResolver = resolve({})
