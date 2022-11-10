import { Body, Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller("api")
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
 findApplePrices(): Promise<any> {
    return this.appService.findApple();
  }
}
