export const fetchDocTypeByDepartment = () => {
  return (context) => {
    console.log(context.params)

    context.params.query['department.departmentName'] = context.params.query.departmentName

    // const query= {
    //     roomId: {
    //       $in: [2, 5]
    //     }
    // const departmentNameRegeX = new RegExp(, 'i')
    // context.params.query['department.departmentName'] = {
    //   $in: [context.params.query.departmentName[0], context.params.query.departmentName[1]]
    // }
    delete context.params.query.departmentName
    // delete context.params.query.departmentName

    console.log(context.params.query)
    return context
  }
}
