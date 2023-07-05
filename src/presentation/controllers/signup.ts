import { InvalidParamError, MissinParamError } from '../errors/missing-param-error'
import { badRequest, sucess, serverError } from '../helpers/http-helper'
import { Controller } from '../protocols/controllers'
import { EmailValidator } from '../protocols/email-validator'
import { Request, Response } from '../protocols/http'

export class SignUpController implements Controller {
  constructor (private readonly emailValidator: EmailValidator) {}

  async handle (request: Request): Promise<Response> {
    try {
      const requiredFields = ['name', 'email', 'password', 'passwordConfirmation']
      for (const field of requiredFields) {
        if (!request.body[field]) return badRequest(new MissinParamError(field))
      }
      if (!this.emailValidator.isValid(request.body.email)) return badRequest(new InvalidParamError('email'))
      return sucess({})
    } catch (error) {
      return serverError()
    }
  }
}
