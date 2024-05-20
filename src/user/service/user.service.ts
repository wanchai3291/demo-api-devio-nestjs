import {
  BadRequestException,
  ForbiddenException,
  Injectable,
} from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { UserRepositoryService } from '../repository/repository.dto';
import { User } from '../dtos/user.dto';
import { UserRole } from 'src/guards/role.enum';

@Injectable()
export class UserService {
  constructor(private userRepositoryService: UserRepositoryService) {}
  public async createUser(data: User, user) {
    if (await this.userRepositoryService.getUser({ username: data.username })) {
      throw new BadRequestException(`User ${data.username} already exists`);
    }
    if (data.role === UserRole.ADMIN && user.role !== UserRole.ADMIN) {
      throw new ForbiddenException('Forbidden: Insufficient permissions.');
    }
    const saltOrRounds = 10;
    const password = data.password;
    const hash = await bcrypt.hash(password, saltOrRounds);

    return this.userRepositoryService.insertUser({
      username: data.username,
      password: hash,
      role: data.role,
    });
  }
  public async getUsers() {
    try {
      return await this.userRepositoryService.listUser();
    } catch (error) {
      throw error;
    }
  }
}
