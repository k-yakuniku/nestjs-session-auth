"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthenticationGuard = exports.LocalAuthGuard = void 0;
const passport_1 = require("@nestjs/passport");
class LocalAuthGuard extends (0, passport_1.AuthGuard)('local') {
    async canActivate(context) {
        const result = (await super.canActivate(context));
        const req = context.switchToHttp().getRequest();
        console.log(`Session: ${req.user}`);
        await super.logIn(req);
        return result;
    }
}
exports.LocalAuthGuard = LocalAuthGuard;
class AuthenticationGuard {
    async canActivate(context) {
        const req = context.switchToHttp().getRequest();
        const result = req.isAuthenticated();
        return result;
    }
}
exports.AuthenticationGuard = AuthenticationGuard;
//# sourceMappingURL=local.authguard.js.map