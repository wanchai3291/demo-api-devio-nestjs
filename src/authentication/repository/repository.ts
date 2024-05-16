import { Injectable } from '@nestjs/common';
import { Authentication } from '../dtos/auth.dto';
import { PrismaService } from 'prisma/prisma.service';

@Injectable()
export class AuthenticationRepositoryService {
  constructor(private readonly prisma: PrismaService) {}
  getProfileByUsername(data: Authentication) {
    return this.prisma.user.findUnique({
      where: { username: data.username },
    });
  }
}
