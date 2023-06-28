export class SignUpController {
  async handle (request: any): Promise<any> {
    return { body: new Error('Missing param: name'), statusCode: 400 }
  }
}
