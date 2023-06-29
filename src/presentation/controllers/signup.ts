import { Request, Response } from '../protocols/http'

export class SignUpController {
  async handle (request: Request): Promise<Response> {
    if (!request.body.name) return { body: new Error('Missing param: name'), statusCode: 400 }
    if (!request.body.email) return { body: new Error('Missing param: email'), statusCode: 400 }
    return { body: null, statusCode: 200 }
  }
}
