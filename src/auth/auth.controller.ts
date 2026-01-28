import { Body, Controller, Post, Req, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthGuard } from 'nest-keycloak-connect';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('signup')
  async signup(@Body() body: any) {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const { email, name, keycloakId } = body;
    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
    return this.authService.signup(email, name, keycloakId);
  }

  @UseGuards(AuthGuard)
  @Post('login')
  async login(@Req() req: any) {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access
    const keycloakId = req.user.sub;
    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
    return this.authService.login(keycloakId);
  }
}
