import { MissinParamError } from '../errors/missing-param-error'
import { SignUpController } from './signup'

describe('SignUp Controller', () => {
  test('Should return 400 id no name is provided', async () => {
    const sut = new SignUpController()
    const request = {
      body: {
        email: '3g8v6@example.com',
        password: 'any_password',
        passwordConfirmation: 'any_password'
      }
    }
    const response = await sut.handle(request)
    expect(response.statusCode).toBe(400)
    expect(response.body).toStrictEqual(new MissinParamError('name'))
  })

  test('Should return 400 id no email is provided', async () => {
    const sut = new SignUpController()
    const request = {
      body: {
        name: 'any_name',
        password: 'any_password',
        passwordConfirmation: 'any_password'
      }
    }
    const response = await sut.handle(request)
    expect(response.statusCode).toBe(400)
    expect(response.body).toStrictEqual(new MissinParamError('email'))
  })
})
