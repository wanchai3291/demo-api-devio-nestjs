import { Body, Controller, Post } from '@nestjs/common';
import { BeaconService } from '../services/beacon.service';
import { Beacon } from '../dtos/beacon.dto';

@Controller('beacon')
export class BeaconController {
  constructor(private beaconService: BeaconService) {}
  @Post()
  async create(@Body() body: Beacon) {
    return await this.beaconService.createBeacon(body);
  }
  async list() {
    return this.beaconService.getBeacons();
  }
}
