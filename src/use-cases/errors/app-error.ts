export class AppError extends Error {
  public message: string
  public statusCode: number
  public errorCode: string | undefined

  constructor(message: string, statusCode = 400, errorCode?: string) {
    super(message)

    this.message = message
    this.statusCode = statusCode
    this.errorCode = errorCode
  }
}
