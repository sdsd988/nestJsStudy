import {Logger, NestMiddleware} from "@nestjs/common";
import {Request, Response, NextFunction} from "express";

export class LoggingMiddleware implements NestMiddleware {

    private readonly logger = new Logger();

    use(req: Request, res: Response, next:NextFunction ) {

        const {method, url} = req;
        const startTime = Date.now();

        res.on('finish', () => {
            const {statusCode} = req;
            const responseTime = Date.now();
            this.logger.log(`[$(method)]${url} [${method}] ${JSON.stringify(responseTime)}`);

        });

        next();
    }
}