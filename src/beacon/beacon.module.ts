import { Module } from '@nestjs/common';
import { BeaconService } from './services/beacon.service';
import { BeaconController } from './controllers/beacon.controller';
import { BeaconRepositoryService } from './repository/beacon.repository';
import { PrismaModule } from 'prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  providers: [BeaconService, BeaconRepositoryService],
  controllers: [BeaconController],
})
export class BeaconModule {}
