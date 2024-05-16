import { IsArray, IsOptional, IsString } from 'class-validator';

export class Beacon {
  @IsString()
  hwid: string;

  @IsString()
  beaconName: string;

  @IsString()
  beaconLocation: string;

  @IsArray()
  @IsOptional()
  tags: [];

  @IsString()
  basicId: string;
}
