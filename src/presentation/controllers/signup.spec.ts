import { MissinParamError } from '../errors/missing-param-error'
import { SignUpController } from './signup'

const makeSut = (): SignUpController => {
  return new SignUpController()
}

describe('SignUp Controller', () => {
  test('Should return 400 if no name is provided', async () => {
    const sut = makeSut()
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

  test('Should return 400 if no email is provided', async () => {
    const sut = makeSut()
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

  test('Should return 400 if no password is provided', async () => {
    const sut = makeSut()
    const request = {
      body: {
        name: 'any_name',
        email: '3g8v6@example.com',
        passwordConfirmation: 'any_password'
      }
    }
    const response = await sut.handle(request)
    expect(response.statusCode).toBe(400)
    expect(response.body).toStrictEqual(new MissinParamError('password'))
  })

  test('Should return 400 if no passwordConfirmation is provided', async () => {
    const sut = makeSut()
    const request = {
      body: {
        name: 'any_name',
        email: '3g8v6@example.com',
        password: 'any_password'
      }
    }
    const response = await sut.handle(request)
    expect(response.statusCode).toBe(400)
    expect(response.body).toStrictEqual(new MissinParamError('passwordConfirmation'))
  })
})
