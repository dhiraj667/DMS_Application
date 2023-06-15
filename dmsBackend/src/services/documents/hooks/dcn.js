export const dcn = () => {
  return async (context) => {
    //         //-------dept code for first four chars
    const departmentName = context.data.departmentName
    const departmentCode = departmentName.slice(0, 4).toUpperCase()

    delete context.data.departmentName

    //         //------------date for middle 6 chars
    const date = new Date()
    let fullYear = date.getFullYear()
    const year = fullYear.toString().slice(2)
    const currentDate = date.getDate() + '' + date.getMonth() + '' + year
    console.log(currentDate)

    // ----------alphanumeric values for last 4 chars
    let num = Math.random().toString(36).slice(4, 8)
    console.log(num)

    //--------final output dcn-------
    const dcn = departmentCode + currentDate + '' + num
    console.log(dcn)
    context.data.dcn = dcn
    return context
  }
}
