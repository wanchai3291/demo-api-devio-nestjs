import { Controller, Get } from '@nestjs/common';

@Controller()
export class AppController {
  @Get()
  test() {
    return 'test';
  }
}
