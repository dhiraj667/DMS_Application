import { documents } from './documents/documents.js'

import { doctypefields } from './doctypefields/doctypefields.js'

import { departments } from './departments/departments.js'

export const services = (app) => {
  app.configure(documents)

  app.configure(doctypefields)

  app.configure(departments)

  // All services will be registered here
}
