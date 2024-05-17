import { Injectable } from '@nestjs/common';
import { Beacon } from '../dtos/beacon.dto';
import { BeaconRepositoryService } from '../repository/beacon.repository';

@Injectable()
export class BeaconService {
  constructor(private readonly repository: BeaconRepositoryService) {}
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  public async getBeacons(params?: any) {
    try {
      const response = await this.repository.listBeacon();
      return response;
    } catch (error) {
      throw error;
    }
  }
  public async createBeacon(beacon: Beacon, user: any) {
    try {
      const response = await this.repository.insertBeacon({
        ...beacon,
        createdBy: user.username,
        updatedBy: user.username,
      });
      return response;
    } catch (error) {
      throw error;
    }
  }
}
