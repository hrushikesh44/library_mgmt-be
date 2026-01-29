import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { UsersModule } from 'src/users/users.module';
import { KeycloakModule } from 'src/keycloak/keycloak.module';

@Module({
  imports: [UsersModule, KeycloakModule],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule {}
