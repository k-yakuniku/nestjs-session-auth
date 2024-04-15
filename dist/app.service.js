"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppService = void 0;
const common_1 = require("@nestjs/common");
const users_1 = require("./lib/Mongodb/users");
let AppService = class AppService {
    async getUsers() {
        try {
            return await users_1.userModel.find();
        }
        catch (e) {
            console.log(e);
            return null;
        }
    }
    async create(newUser) {
        try {
            await users_1.userModel.findOne({ email: newUser.email }).catch(() => {
                throw new Error('Exist_User').message;
            });
            return await users_1.userModel.create({
                email: newUser.email,
                hashedPass: newUser.password,
            });
        }
        catch (e) {
            console.log(e);
            return e;
        }
    }
    async update(upUser) {
        try {
            const result = (await users_1.userModel.updateOne({ email: upUser.email }, upUser)).acknowledged;
            if (!result)
                throw new Error('Failed').message;
            return result;
        }
        catch (e) {
            console.log(e);
            return e;
        }
    }
    async delete(deUser) {
        try {
            const user = (await users_1.userModel.findOne({ email: deUser.email })).toObject();
            if (!user)
                throw new Error('Not_User');
            return (await users_1.userModel.deleteOne({ email: deUser.email })).acknowledged;
        }
        catch (e) {
            console.log(e);
            return e;
        }
    }
    async deserialize(email) {
        try {
            const user = (await users_1.userModel.findOne({ email })).toObject();
            const { hashedPass } = user, result = __rest(user, ["hashedPass"]);
            if (!hashedPass)
                throw new Error('Failed').message;
            return result;
        }
        catch (e) {
            return e;
        }
    }
};
exports.AppService = AppService;
exports.AppService = AppService = __decorate([
    (0, common_1.Injectable)()
], AppService);
//# sourceMappingURL=app.service.js.map