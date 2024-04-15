/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/callback" />
/// <reference types="mongoose/types/collection" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/expressions" />
/// <reference types="mongoose/types/helpers" />
/// <reference types="mongoose/types/middlewares" />
/// <reference types="mongoose/types/indexes" />
/// <reference types="mongoose/types/models" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/populate" />
/// <reference types="mongoose/types/query" />
/// <reference types="mongoose/types/schemaoptions" />
/// <reference types="mongoose/types/schematypes" />
/// <reference types="mongoose/types/session" />
/// <reference types="mongoose/types/types" />
/// <reference types="mongoose/types/utility" />
/// <reference types="mongoose/types/validation" />
/// <reference types="mongoose/types/virtuals" />
/// <reference types="mongoose" />
/// <reference types="mongoose/types/inferschematype" />
import { AppService } from './app.service';
import { IUserUpdateInput } from './user.interface';
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    getUserList(): Promise<(import("mongoose").Document<unknown, {}, import("./lib/Mongodb/users").IUsersType> & import("./lib/Mongodb/users").IUsersType & Required<{
        _id: string;
    }>)[]>;
    signin(signin: IUserUpdateInput, req: any): Promise<any>;
    signout(req: any): Promise<string>;
    createUser(createUser: IUserUpdateInput): Promise<any>;
    updateUser(updateUser: IUserUpdateInput): Promise<any>;
    deleteUser(deleteUser: IUserUpdateInput): Promise<any>;
}
