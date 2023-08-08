import nodemailer from "nodemailer"

async function send (sendInfo)


const transporter = nodemailer.createTransport({
  host: "smtp.qq.com",
  port: 465,
  secure: true,
  auth: {
    // TODO: replace `user` and `pass` values from <https://forwardemail.net>
    user: '845415120@qq.com',
    pass: 'dsirnrkruzxpbbaj'
  }
})
let url = 'http://www.imooc.com'
// let sendInfo = {
//   code: "1234",
//   expire: "2023-9-9",
//   email: '845415120@qq.com',
//   user: 'Jiang'
// }
// async..await is not allowed in global scope, must use a wrapper
async function main () {
  // send mail with defined transport object
  const info = await transporter.sendMail({
    from: '"认证邮箱 👻" <845415120@qq.com>', // sender address
    to: sendInfo.email, // list of receivers
    subject: sendInfo.user !== '' ? `你好开发者,${sendInfo.user}!注册码`
      : '注册吗', // Subject line
    text: `您的注册码是${sendInfo.code}`, // plain text body
    html: ` <div style="border: 1px solid #dcdcdc;color: #676767;width: 600px; margin: 0 auto; padding-bottom: 50px;position: relative;">
    <div style="height: 60px; background: #393d49; line-height: 60px; color: #58a36f; font-size: 18px;padding-left: 10px;">Imooc社区——欢迎来到官方社区</div>
    <div style="padding: 25px">
      <div>您好，${sendInfo.user}童鞋，重置链接有效时间30分钟，请在${sendInfo.expire}之前重置您的密码：</div>
      <a href="${url}" style="padding: 10px 20px; color: #fff; background: #009e94; display: inline-block;margin: 15px 0;">立即重置密码</a>
      <div style="padding: 5px; background: #f2f2f2;">如果该邮件不是由你本人操作，请勿进行激活！否则你的邮箱将会被他人绑定。</div>
    </div>
    <div style="background: #fafafa; color: #b4b4b4;text-align: center; line-height: 45px; height: 45px; position: absolute; left: 0; bottom: 0;width: 100%;">系统邮件，请勿直接回复</div>
</div>`, // html body
  })

  console.log("Message sent: %s", info.messageId)

}

// main().catch(console.error)
export default send