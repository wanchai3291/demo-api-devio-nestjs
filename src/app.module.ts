import { Module } from '@nestjs/common';

import { BeaconModule } from './beacon/beacon.module';
import { UserModule } from './user/user.module';
import { AuthenticationModule } from './authentication/authentication.module';

@Module({
  imports: [BeaconModule, UserModule, AuthenticationModule],
})
export class AppModule {}
