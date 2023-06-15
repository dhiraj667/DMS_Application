export const createIndexingInfo = () => {
  return (context) => {
    const name = context.data.doctype
    const path = context.data.path
    const date = context.data.date
    const dcn = context.data.dcn
    const driveFile_Id = context.data.driveFile_Id

    //deleteing
    delete context.data.date
    delete context.data.path
    delete context.data.dcn
    delete context.data.doctype
    delete context.data.driveFile_Id

    const indexingInfo = { ...context.data }
    context.data = {}
    console.log(context.data)

    // creating new context as we require

    context.data.name = name
    context.data.path = path
    context.data.date = date
    context.data.dcn = dcn
    context.data.driveFile_Id = driveFile_Id
    context.data.indexingInfo = indexingInfo
    return context
  }
}
