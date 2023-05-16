export const admin = () => {
  return async (context) => {
    if (!(context.params.user.role === 'Admin')) throw new Error({ message: 'Access Forbidden' }) 
    // throw new Error({ message: 'Access Forbidden' })
    return context
  }
}

export const indexer = () => {
  return async (context) => {
    if (!(context.params.user.role === 'indexer')) throw new errors.Forbidden("Access Forbidden")
    return context
  }
}

export const generalUser = () => {
  return async (context) =>{
    if (!(context.params.user.role === 'generalUser')) throw new Error({ message: 'Access Forbidden' })
    return context
  }
}
