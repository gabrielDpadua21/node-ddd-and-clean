export class MissinParamError extends Error {
  constructor (param: string) {
    super(`Missing param: ${param}`)
    this.name = 'MissinParamError'
  }
}

export class InvalidParamError extends Error {
  constructor (param: string) {
    super(`Invalid param: ${param}`)
    this.name = 'InvalidParamError'
  }
}
