import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('/salam')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/ok')
  getSalam(): String{
    return this.appService.getSalam();
  }
}
