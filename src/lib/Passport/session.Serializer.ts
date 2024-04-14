import { Injectable } from '@nestjs/common';
import { PassportSerializer } from '@nestjs/passport';
import { AppService } from 'src/app.service';
import { IUserExposed } from 'src/user.interface';

@Injectable()
export class SessionSerializer extends PassportSerializer {
  constructor(private readonly appservice: AppService) {
    super();
  }
  serializeUser(user: any, done: (e: Error, email: string) => void) {
    done(null, user._id);
  }
  async deserializeUser(
    email: string,
    done: (e: Error, user: IUserExposed) => void,
  ) {
    const user = await this.appservice.deserialize(email);
    done(null, user);
  }
}
