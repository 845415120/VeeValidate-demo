const express = require('express')
const session = require('express-session')
const svgCaptcha = require('svg-captcha')

const app = express()

// 跨域
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8080') // 替换为前端代码运行的域名和端口
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE')
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization')
  res.setHeader('Access-Control-Allow-Credentials', true)

  // 如果是预检请求（OPTIONS），直接返回成功状态码
  if (req.method === 'OPTIONS') {
    return res.sendStatus(200)
  }

  next()
})

app.use(session({
  secret: 'your-secret-key', // 更换为一个随机的密钥字符串
  resave: false,
  saveUninitialized: true,
}))


app.get('/captcha', function (req, res) {
  const captcha = svgCaptcha.create({
    size: 4, // 验证码长度
    noise: 0,// 干扰线条的数量
    color: true, // 验证码的字符是否有颜色，默认没有，如果设定了背景，则默认有
    background: '#ffffff', // 验证码图片背景颜色

  })
  req.session.captcha = captcha.text
  res.type('svg')
  res.set('Content-Type', 'image/svg+xml')
  res.status(200).send(captcha.data)
})


app.get('/captcha-text', function (req, res) {
  const captcha = svgCaptcha.create()

  res.status(200).send(captcha.text)
})
app.get('/', (req, res) => {
  res.send('Hello, World!')
})

app.listen(3000, () => {
  console.log('Server is running on port 3000...')
})