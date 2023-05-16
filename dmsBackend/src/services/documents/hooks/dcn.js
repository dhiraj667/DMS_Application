export const dcn=()=>{
    return async(context)=>{
//         //-------dept code for first four chars
//         const departmentService = context.app.service("departments");
//         // const dept = await departmentService.get()
//         // console.log(departmentService);

//         //------------date for middle 6 chars
        const date = new Date();
        let fullYear = date.getFullYear();
        const year = fullYear.toString().slice(2);
        const currentDate = date.getDate() + "" +date.getMonth() + ""+year
        console.log(currentDate);

        // ----------alphanumeric values for last 4 chars
        let num = Math.random().toString(36).slice(4,8)
        console.log(num);


        //--------final output dcn-------
        const dcnNO =  currentDate +""+ num;
        console.log(dcnNO);
        // return context

    }
}