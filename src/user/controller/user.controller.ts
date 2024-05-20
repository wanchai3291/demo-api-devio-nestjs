import {
  Body,
  Controller,
  Post,
  UseGuards,
  Request,
  UsePipes,
  ValidationPipe,
  Get,
} from '@nestjs/common';
import { UserService } from '../service/user.service';
import { User } from '../dtos/user.dto';
import { AuthGuard } from 'src/guards/auth.guard';
import { RolesGuard } from 'src/guards/roles.guard';
import { Roles } from 'src/decorator/roles.decorator';
import { UserRole } from 'src/guards/role.enum';

@Controller('user')
@UseGuards(AuthGuard, RolesGuard)
export class UserController {
  constructor(private readonly userService: UserService) {}
  @Post()
  @Roles(UserRole.ADMIN)
  @UsePipes(ValidationPipe)
  public async create(@Request() req: any, @Body() body: User) {
    return await this.userService.createUser(body, req.user);
  }
  @Get()
  @Roles(UserRole.ADMIN, UserRole.OPERATOR, UserRole.USER)
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  public async list(@Request() req: any) {
    return await this.userService.getUsers();
  }
}
