import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';

@Injectable()
export class UserRepositoryService {
  constructor(private prisma: PrismaService) {}

  public async insertUser(data: any) {
    console.log(data);

    return await this.prisma.user.create({ data });
  }
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  public async listUser(options?: any) {
    return await this.prisma.user.findMany({});
  }
  public async getUser(params?: any) {
    return await this.prisma.user.findUnique({ where: params });
  }
}
