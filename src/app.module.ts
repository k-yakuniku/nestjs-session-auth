import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import * as session from 'express-session';
import * as passport from 'passport';
import { userModel } from './lib/Mongodb/users';
import { LocalStrategy } from './lib/Passport/local.strategy';
import { SessionSerializer } from './lib/Passport/session.Serializer';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: [`.env`, `.env.local`],
    }),
  ],
  controllers: [AppController],
  providers: [AppService, userModel, LocalStrategy, SessionSerializer],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(
        session({
          secret: process.env.EXPRESS_SESSION_SECRET_KEY!,
          resave: false,
          saveUninitialized: false,
          cookie: {
            secure: false,
            httpOnly: false,
            sameSite: 'strict',
            domain: process.env.EXPRESS_SESSION_DOMAIN!,
            maxAge: 60 * 60 * 1000,
          },
        }),
        passport.initialize(),
        passport.session(),
      )
      .forRoutes('*');
  }
}
