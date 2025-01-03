import { AppService } from './app.service';
import { ConfigService } from "@nestjs/config";
export declare class AppController {
    private readonly appService;
    private readonly configService;
    constructor(appService: AppService, configService: ConfigService);
    private readonly logger;
    getHello(ip: string): string;
    getName(name: string): String;
}
