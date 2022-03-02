import * as argon2 from 'argon2'
import { Request, Response } from 'express'

import { User, UserModel } from '../../models/user'

export class AuthController {
  async handle (request: Request, response: Response): Promise<Response> {
    try {
      const { password, name, createdAt, email } = request.body as User

      const passwordhash = await argon2.hash(password)
      console.log('passwordhash', passwordhash)

      const user = new UserModel({
        password: passwordhash,
        name,
        createdAt,
        email
      })

      await user.save()

      return response.json(user)
    } catch (error) {
      return response.status(400).send(error)
    }
  }
}
