import { Body, Controller, Post } from '@nestjs/common';
import { AuthenticationService } from '../service/authentication.service';
import { Authentication } from '../dtos/auth.dto';

@Controller('authentication')
export class AuthenticationController {
  constructor(private readonly authService: AuthenticationService) {}
  @Post('sign-in')
  signIn(@Body() body: Authentication) {
    return this.authService.signIn(body);
  }
}
