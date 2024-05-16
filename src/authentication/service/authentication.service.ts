import { Injectable, UnauthorizedException } from '@nestjs/common';
import { Authentication } from '../dtos/auth.dto';
import { AuthenticationRepositoryService } from '../repository/repository';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthenticationService {
  constructor(
    private readonly repo: AuthenticationRepositoryService,
    private jwtService: JwtService,
  ) {}
  async signIn(data: Authentication) {
    const profile = await this.repo.getProfileByUsername(data);
    if (!profile) {
      throw new UnauthorizedException();
    }

    const isMatch = await bcrypt.compare(data.password, profile.password);
    if (!isMatch) {
      throw new UnauthorizedException();
    }
    delete profile.password;

    return {
      access_token: await this.jwtService.signAsync(profile, {
        secret: `${process.env.JWT_SECRET}`,
      }),
    };
  }
}
