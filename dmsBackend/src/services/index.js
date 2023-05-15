
import { doctypes } from './doctypes/doctypes.js'

import { fields } from './fields/fields.js'

import { user } from './users/users.js'

import { documents } from './documents/documents.js'

import { doctypefields } from './doctypefields/doctypefields.js'

import { departments } from './departments/departments.js'

export const services = (app) => {
  app.configure(doctypes)

  app.configure(fields)

  app.configure(user)

  app.configure(documents)

  app.configure(doctypefields)

  app.configure(departments)

  // All services will be registered here
}
