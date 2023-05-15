import { departments } from './departments/departments.js'

export const services = (app) => {
  app.configure(departments)

  // All services will be registered here
}
