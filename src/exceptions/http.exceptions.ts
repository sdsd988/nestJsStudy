import {ArgumentsHost, Catch, ExceptionFilter, HttpException} from "@nestjs/common";
import {Response, Request} from "express";

@Catch(HttpException)
export class HttpExceptionFilters implements ExceptionFilter {
    catch(exception: HttpException, host: ArgumentsHost): any {
        const ctx= host.switchToHttp();
        const response = ctx.getResponse<Response>();
        const status = exception.getStatus();
        const request = ctx.getRequest<Request>();

        response.status(status).json({
            statusCode: status,
            timestamp: new Date().toISOString(),
            path: request.url,
        })
    }
}