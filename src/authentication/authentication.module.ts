import { Module } from '@nestjs/common';
import { AuthenticationController } from './controller/authentication.controller';
import { AuthenticationService } from './service/authentication.service';
import { PrismaModule } from 'prisma/prisma.module';
import { AuthenticationRepositoryService } from './repository/repository';
import { JwtService } from '@nestjs/jwt';

@Module({
  imports: [PrismaModule],
  controllers: [AuthenticationController],
  providers: [
    AuthenticationService,
    AuthenticationRepositoryService,
    JwtService,
  ],
})
export class AuthenticationModule {}
