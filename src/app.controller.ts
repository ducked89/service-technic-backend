import { Controller, Get, Request, UseGuards } from '@nestjs/common';
import { AppService } from './app.service';
import { AuthenticatedGuard } from './auth/authenticated.guard';
import { LocalAuthGuard } from './auth/local-auth.guard';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @UseGuards(LocalAuthGuard)
  @Get('/login')
  login(@Request() req): any {
    return { msg: 'Logged In!' };
  }

  @UseGuards(AuthenticatedGuard)
  @Get('protected')
  getHello(): string {
    return this.appService.getHello();
  }
}
