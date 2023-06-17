// import { otpSender } from '../../forget-password/hooks/change-password'
import nodemailer from 'nodemailer'
// import { checkEmail } from './checkEmail'
export const findByEmailId = () => {
  return async (context) => {
    const email = context.params.query.email

    if (email) {
      let digits = '0123456789'
      let OTP = ''
      for (let i = 0; i < 4; i++) {
        OTP += digits[Math.floor(Math.random() * 10)]
      }

      const otpService = context.app.service('otp')
      const newOtp = await otpService.create({ email: email, otp: OTP })

      console.log(newOtp)

      setTimeout(async () => {
        await otpService.remove(newOtp._id)
      }, 500000)

      var transport = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: 'sadanandf@valueaddsofttech.com',
          pass: 'SadV@0103'
        }
      })
      //send out email
      let mailoptions = {
        from: 'Sadanand Fulari',
        to: email,
        subject: 'Hello , Here is Your Otp For resetting Password',
        text: `OTP : ${OTP}`
      }

      transport.sendMail(mailoptions, function (error, info) {
        if (error) {
          console.log(error)
        } else {
          console.log('Email sent' + info.response)
        }
      })
    }
  }
  return context
}
