import { Injectable } from '@nestjs/common';
import { userModel } from './lib/Mongodb/users';
import { IUserUpdateInput } from './user.interface';
//import bcrypt from 'bcrypt';

@Injectable()
export class AppService {
  async getUsers() {
    try {
      return await userModel.find();
    } catch (e) {
      console.log(e);
      return null;
    }
  }
  async create(newUser: IUserUpdateInput) {
    try {
      // 既に登録済み, 空の時find.catch()???
      await userModel.findOne({ email: newUser.email }).catch(() => {
        throw new Error('Exist_User').message;
      });
      return await userModel.create({
        email: newUser.email,
        hashedPass: newUser.password,
      });
    } catch (e) {
      console.log(e);
      return e;
    }
  }
  async update(upUser: IUserUpdateInput) {
    try {
      // if(current_Session.email === upUser.email) return;
      const result = (
        await userModel.updateOne({ email: upUser.email }, upUser)
      ).acknowledged;
      if (!result) throw new Error('Failed').message;
      return result;
    } catch (e) {
      console.log(e);
      return e;
    }
  }
  async delete(deUser: IUserUpdateInput) {
    try {
      const user = (
        await userModel.findOne({ email: deUser.email })
      ).toObject();
      if (!user) throw new Error('Not_User');
      //const isMatch = await bcrypt.compare(deUser.password, user.hashedPass);
      //if (!isMatch) throw new Error('Pass_authentication_Failed');
      return (await userModel.deleteOne({ email: deUser.email })).acknowledged;
    } catch (e) {
      console.log(e);
      return e;
    }
  }
  async deserialize(email: string) {
    try {
      const user = (await userModel.findOne({ email })).toObject();
      const { hashedPass, ...result } = user;
      if (!hashedPass) throw new Error('Failed').message;
      return result;
    } catch (e) {
      return e;
    }
  }
}
