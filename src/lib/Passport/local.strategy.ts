import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-local';
import { userModel } from '../Mongodb/users';
import { UnauthorizedException } from '@nestjs/common';

export class LocalStrategy extends PassportStrategy(Strategy, 'local') {
  constructor() {
    super({ usernameField: 'email' });
  }
  async validate(email: string, password: string) {
    const user = await userModel.findOne({ email, hashedPass: password });
    if (!user) throw new UnauthorizedException();
    return user.toObject();
  }
}
