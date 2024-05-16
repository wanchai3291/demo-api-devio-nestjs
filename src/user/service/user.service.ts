import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { UserRepositoryService } from '../repository/repository.dto';

@Injectable()
export class UserService {
  constructor(private userRepositoryService: UserRepositoryService) {}
  public async createUser(data: any) {
    if (await this.userRepositoryService.getUser({ username: data.username })) {
      throw new Error(`User ${data.username} already exists`);
    }
    const saltOrRounds = 10;
    const password = data.password;
    const hash = await bcrypt.hash(password, saltOrRounds);

    return this.userRepositoryService.insertUser({
      username: data.username,
      password: hash,
    });
  }
}
