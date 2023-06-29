import { MissinParamError } from '../errors/missing-param-error'
import { Request, Response } from '../protocols/http'

export class SignUpController {
  async handle (request: Request): Promise<Response> {
    if (!request.body.name) return { body: new MissinParamError('name'), statusCode: 400 }
    if (!request.body.email) return { body: new MissinParamError('email'), statusCode: 400 }
    return { body: null, statusCode: 200 }
  }
}
