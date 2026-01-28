import { BadRequestException, Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class AuthService {
  constructor(private usersService: UsersService) {}

  async signup(email: string, name: string, keycloakId: string) {
    const existing = await this.usersService.findByEmail(email);
    if (existing) {
      throw new BadRequestException('User already exists!');
    }

    return this.usersService.create({
      email,
      name,
      keycloakId,
    });
  }

  async login(keycloakId: string) {
    return this.usersService.findByKeycloakId(keycloakId);
  }
}
