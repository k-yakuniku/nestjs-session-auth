import { CanActivate, ExecutionContext } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

// login LocalStrategyのvalidate => Serialize = user:{emai_obj}
export class LocalAuthGuard extends AuthGuard('local') {
  async canActivate(context: ExecutionContext): Promise<boolean> {
    const result = (await super.canActivate(context)) as boolean;
    const req = context.switchToHttp().getRequest();
    console.log(`Session: ${req.user}`);
    await super.logIn(req);
    return result;
  }
}
// sessionを持っている => true =>  rootが機能する
export class AuthenticationGuard implements CanActivate {
  async canActivate(context: ExecutionContext) {
    const req = context.switchToHttp().getRequest();
    const result = req.isAuthenticated();
    return result;
  }
}
