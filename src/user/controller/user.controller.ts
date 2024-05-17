import { Body, Controller, Post } from '@nestjs/common';
import { UserService } from '../service/user.service';
import { User } from '../dtos/user.dto';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}
  @Post()
  public async create(@Body() body: User) {
    return await this.userService.createUser(body);
  }
}
