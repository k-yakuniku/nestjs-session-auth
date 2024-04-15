"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userModel = void 0;
var mongoose_1 = require("mongoose");
var uuid_1 = require("uuid");
var userSchema = new mongoose_1.Schema({
    _id: { type: String, default: (0, uuid_1.v4)() },
    name: { type: String, required: false },
    introduction: { type: String, required: false },
    email: { type: String, required: true },
    hashedPass: { type: String, required: true },
    createdAd: { type: Date, default: Date.now() },
    updatedAt: { type: Date, default: Date.now() },
});
exports.userModel = (0, mongoose_1.model)('user', userSchema);
