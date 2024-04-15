import { PassportSerializer } from '@nestjs/passport';
import { AppService } from 'src/app.service';
import { IUserExposed } from 'src/user.interface';
export declare class SessionSerializer extends PassportSerializer {
    private readonly appservice;
    constructor(appservice: AppService);
    serializeUser(user: any, done: (e: Error, email: string) => void): void;
    deserializeUser(email: string, done: (e: Error, user: IUserExposed) => void): Promise<void>;
}
