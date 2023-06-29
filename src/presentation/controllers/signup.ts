import { MissinParamError } from '../errors/missing-param-error'
import { badRequest, sucess } from '../helpers/http-helper'
import { Request, Response } from '../protocols/http'

export class SignUpController {
  async handle (request: Request): Promise<Response> {
    const requiredFields = ['name', 'email', 'password', 'passwordConfirmation']
    for (const field of requiredFields) {
      if (!request.body[field]) return badRequest(new MissinParamError(field))
    }
    return sucess({})
  }
}
