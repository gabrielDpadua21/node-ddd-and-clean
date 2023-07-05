import { ServerError } from '../errors/missing-param-error'
import { Response } from '../protocols/http'

export const badRequest = (error: Error): Response => ({
  statusCode: 400,
  body: error
})

export const sucess = (body: any): Response => ({
  statusCode: 200,
  body
})

export const serverError = (): Response => ({
  statusCode: 500,
  body: new ServerError()
})
