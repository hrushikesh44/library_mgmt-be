import { Module } from '@nestjs/common';
import { KeycloakConnectModule } from 'nest-keycloak-connect';

@Module({
  imports: [
    KeycloakConnectModule.register({
      authServerUrl: 'http://localhost:8080',
      realm: 'library',
      clientId: 'library-backend',
      secret: 'xxxx',
    }),
  ],
  exports: [KeycloakConnectModule],
})
export class KeycloakModule {}
