import { Request, Response } from 'express';
import { ArgumentsHost, Catch, ExceptionFilter, HttpException } from '@nestjs/common';

@Catch(HttpException)
export class GlobalFilter implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost): void {
    const req = host.switchToHttp().getRequest<Request>();
    const res = host.switchToHttp().getResponse<Response>();
    
    console.log(req.body);
    
    console.log("\n\n\n\n\n\n");
    
    console.log(exception.getResponse());
    
    
    res.status(exception.getStatus()).json({ statusCode: exception.getStatus(), message: exception.message,error:exception.getResponse() });
  }
}