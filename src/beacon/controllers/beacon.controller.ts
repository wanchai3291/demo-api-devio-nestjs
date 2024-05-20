import {
  Body,
  Controller,
  Get,
  Post,
  UseGuards,
  Request,
} from '@nestjs/common';
import { BeaconService } from '../services/beacon.service';
import { Beacon } from '../dtos/beacon.dto';
import { AuthGuard } from 'src/guards/auth.guard';

@Controller('beacon')
@UseGuards(AuthGuard)
export class BeaconController {
  constructor(private beaconService: BeaconService) {}
  @Post()
  async create(@Request() req: any, @Body() body: Beacon) {
    return await this.beaconService.createBeacon(body, req.user);
  }
  @Get()
  async list() {
    return this.beaconService.getBeacons();
  }
}
