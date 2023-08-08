import send from '../index'

class LoginController {
  constructor() {
    async function forget (ctx) {
      const { body } = ctx.request
      try {
        let resul = await send({
          code: "1234",
          expire: "2023-9-9",
          email: '845415120@qq.com',
          user: 'Jiang'
        })
      } catch {

      }
    }
  }
}

export default new LoginController()