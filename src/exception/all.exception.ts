import {
  Catch,
  ArgumentsHost,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { BaseExceptionFilter } from '@nestjs/core';

@Catch() // Catch all exceptions
export class AllExceptionsFilter extends BaseExceptionFilter {
  catch(exception: any, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse();
    const request = ctx.getRequest();

    const status =
      exception instanceof HttpException
        ? exception.getStatus()
        : HttpStatus.INTERNAL_SERVER_ERROR;

    const message = this.getErrorMessage(exception);

    response.status(status).json({
      statusCode: status * 100,
      statusMessage: exception.response.error,
      timestamp: new Date().toISOString(),
      path: request.url,
      message,
    });
  }
  private getErrorMessage(exception: any): string {
    return exception.message;
  }
}
