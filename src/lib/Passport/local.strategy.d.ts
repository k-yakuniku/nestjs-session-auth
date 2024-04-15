import { Strategy } from 'passport-local';
declare const LocalStrategy_base: new (...args: any[]) => Strategy;
export declare class LocalStrategy extends LocalStrategy_base {
    constructor();
    validate(email: string, password: string): Promise<import("../Mongodb/users").IUsersType & Required<{
        _id: string;
    }>>;
}
export {};
