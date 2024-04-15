"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LocalStrategy = void 0;
const passport_1 = require("@nestjs/passport");
const passport_local_1 = require("passport-local");
const users_1 = require("../Mongodb/users");
const common_1 = require("@nestjs/common");
class LocalStrategy extends (0, passport_1.PassportStrategy)(passport_local_1.Strategy, 'local') {
    constructor() {
        super({ usernameField: 'email' });
    }
    async validate(email, password) {
        const user = await users_1.userModel.findOne({ email, hashedPass: password });
        if (!user)
            throw new common_1.UnauthorizedException();
        return user.toObject();
    }
}
exports.LocalStrategy = LocalStrategy;
//# sourceMappingURL=local.strategy.js.map