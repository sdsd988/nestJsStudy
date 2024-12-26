import {Controller, Get, HttpException, HttpStatus, Logger, Param, Query} from '@nestjs/common';
import { AppService } from './app.service';
import {Ip} from "./decorators/ip.decorator";
import {ConfigService} from "@nestjs/config";

@Controller()
export class AppController {
  constructor(
      private readonly appService: AppService,
      private readonly configService: ConfigService
  ) {}

  private readonly logger = new Logger();

  @Get()
  getHello(
      @Ip() ip: string,
  ): string {
    console.log(this.configService.get('ENVIRONMENT'));
    return this.appService.getHello();
  }

  @Get('name')
  getName(
  @Query('name') name: string,
  ): String{
    return `${name} hello`;
  }
}
