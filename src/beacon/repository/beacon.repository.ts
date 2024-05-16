import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';

@Injectable()
export class BeaconRepositoryService {
  constructor(private prisma: PrismaService) {}

  public async insertBeacon(data: any) {
    return await this.prisma.beacon.create({ data });
  }
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  public async listBeacon(options?: any) {
    return await this.prisma.beacon.findMany({});
  }
}
