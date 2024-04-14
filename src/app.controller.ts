import {
  Body,
  Controller,
  Delete,
  Get,
  Patch,
  Post,
  Request,
  UseGuards,
} from '@nestjs/common';
import { AppService } from './app.service';
import { IUserUpdateInput } from './user.interface';
import {
  AuthenticationGuard,
  LocalAuthGuard,
} from './lib/Passport/local.authguard';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}
  @Get('/')
  async getUserList() {
    return await this.appService.getUsers();
  }
  @UseGuards(LocalAuthGuard)
  @Post('/signin')
  async signin(@Body() signin: IUserUpdateInput, @Request() req: any) {
    return req.user;
  }
  @UseGuards(AuthenticationGuard)
  @Post('/signout')
  async signout(@Request() req: any) {
    req.session.destroy();
    //req.logout();
    return 'Destroy';
  }
  @Post('/create')
  async createUser(@Body() createUser: IUserUpdateInput) {
    return await this.appService.create(createUser);
  }
  @UseGuards(AuthenticationGuard)
  @Patch('/update')
  async updateUser(@Body() updateUser: IUserUpdateInput) {
    return await this.appService.update(updateUser);
  }
  @UseGuards(AuthenticationGuard)
  @Delete('/delete')
  async deleteUser(@Body() deleteUser: IUserUpdateInput) {
    return await this.appService.delete(deleteUser);
  }
}
