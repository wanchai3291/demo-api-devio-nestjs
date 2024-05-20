import { Module } from '@nestjs/common';
import { UserController } from './controller/user.controller';
import { UserService } from './service/user.service';
import { UserRepositoryService } from './repository/repository.dto';
import { PrismaModule } from 'prisma/prisma.module';
import { JwtService } from '@nestjs/jwt';

@Module({
  imports: [PrismaModule],
  controllers: [UserController],
  providers: [UserService, UserRepositoryService, JwtService],
})
export class UserModule {}
