import { doctypes } from './doctypes/doctypes.js'

import { fields } from './fields/fields.js'

import { user } from './users/users.js'

export const services = (app) => {
  app.configure(doctypes)

  app.configure(fields)

  app.configure(user)

  // All services will be registered here
}
