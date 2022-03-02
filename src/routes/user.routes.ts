import { Router } from 'express'
import { AuthController } from '../useCases/authUseCase/authController'

const userRoutes = Router()

const authController = new AuthController()

userRoutes.post('/', authController.handle)
userRoutes.get('/', (req, res) => {
  console.log('ola')
  res.json({ message: 'boa' })
})

export { userRoutes }
