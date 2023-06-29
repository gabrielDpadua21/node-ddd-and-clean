import { MissinParamError } from '../errors/missing-param-error'
import { badRequest, sucess } from '../helpers/http-helper'
import { Request, Response } from '../protocols/http'

export class SignUpController {
  async handle (request: Request): Promise<Response> {
    if (!request.body.name) return badRequest(new MissinParamError('name'))
    if (!request.body.email) return badRequest(new MissinParamError('email'))
    return sucess({})
  }
}
