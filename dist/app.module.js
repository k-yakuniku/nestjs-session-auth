"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const config_1 = require("@nestjs/config");
const session = require("express-session");
const passport = require("passport");
const users_1 = require("./lib/Mongodb/users");
const local_strategy_1 = require("./lib/Passport/local.strategy");
const session_Serializer_1 = require("./lib/Passport/session.Serializer");
let AppModule = class AppModule {
    configure(consumer) {
        consumer
            .apply(session({
            secret: process.env.EXPRESS_SESSION_SECRET_KEY,
            resave: false,
            saveUninitialized: false,
            cookie: {
                secure: false,
                httpOnly: false,
                sameSite: 'strict',
                domain: process.env.EXPRESS_SESSION_DOMAIN,
                maxAge: 60 * 60 * 1000,
            },
        }), passport.initialize(), passport.session())
            .forRoutes('*');
    }
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({
                envFilePath: [`.env`, `.env.local`],
            }),
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService, users_1.userModel, local_strategy_1.LocalStrategy, session_Serializer_1.SessionSerializer],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map