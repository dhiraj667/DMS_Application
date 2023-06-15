import bcrypt from 'bcrypt'
import nodemailer from 'nodemailer'

export const changePassword = () => {
  return async (context) => {
    const email = context.data.email
    const otpService = context.app.service('otp')
    const res = await otpService.find({ query: { email: email } })
    console.log(res)
    const newOtp = res.data

    if (context.data.otp === newOtp[0].otp) {
      const userService = context.app.service('users')
      const user = await userService.find({ query: { email: context.data.email } })
      console.log(user)

      if (!(context.data.newPassword === context.data.confirmPassword))
        throw new Error('Confirm and new password is not match')
      console.log(context.data.confirmPassword)
      await userService.patch(user.data[0]._id, { password: context.data.confirmPassword })
    } else {
      throw new Error('OTP Is Not Correct')
    }

    delete context.data.otp
    return context
  }
}
