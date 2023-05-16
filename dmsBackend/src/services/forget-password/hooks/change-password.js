import bcrypt from 'bcrypt'

export const changePassword = () => {
  return async (context) => {
    const userService = context.app.service("users");
    const user = await userService.find({query:{userName:context.data.userName}});
    console.log(user);
    const checkPass = await bcrypt.compare(context.data.password , user.data[0].password);
    if(!checkPass) throw new Error ("old and new password doesn't match");

    if (!(context.data.newPassword === context.data.confirmPassword))
      throw new Error('Confirm and new password is not match')

      await userService.patch(user.data[0]._id, {password:context.data.newPassword})

      return context;
  }
}