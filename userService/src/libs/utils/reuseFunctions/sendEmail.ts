import nodemailer from 'nodemailer'


export const sendEmail = async(email:string)=>{
  console.log("entered sendmail")
    const transporter = nodemailer.createTransport({
        service:'gmail',
        host: "smtp.gmail.com",
        port: 587,
        secure: false, // `true` for port 465, `false` for all other ports
        auth: {
          user:process.env.EMAIL,
          pass: process.env.APP_PASSWORD,
        },
      });

      let otp = Math.floor(1000 + Math.random() * 9000)
    
      const info = await transporter.sendMail( {
        from: '"Shape Up" <aravindreghunath99@gmail.com>', // sender address
        to: email, // list of receivers
        subject: "Your OTP for login", // Subject line
        text: `Your OTP for login is ${otp}`, // plain text body
        html: `<h2> OTP for login </h2>
        <p>Your OTP for login in Shape UP is <strong>${otp}</strong></p>`, // html body
      })
      console.log(info.messageId,'msgid')
      return {otp:otp}

      
}