export const date=()=>{
    return async(context)=>{
        const date = new Date();
        const currentDate = date.getDate() + "/" + date.getMonth() 
        + "/" + date.getFullYear() + " @ " 
        + date.getHours() + ":" 
        + date.getMinutes() + ":" + date.getSeconds();
        // console.log(currentDate);
        context.data.date = currentDate;
        return context;
    }
}