import { Body, Controller, Post } from '@nestjs/common';
import { UserService } from '../service/user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}
  @Post()
  public async create(@Body() body: any) {
    return await this.userService.createUser(body);
  }
}
