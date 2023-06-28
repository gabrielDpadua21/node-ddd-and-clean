export class SignUpController {
  async handle (request: any): Promise<any> {
    if (!request.body.name) return { body: new Error('Missing param: name'), statusCode: 400 }
    if (!request.body.email) return { body: new Error('Missing param: email'), statusCode: 400 }
  }
}
