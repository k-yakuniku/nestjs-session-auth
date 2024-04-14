import { Document, model, Schema } from 'mongoose';
import { v4 as uuidv4 } from 'uuid';

export interface IUsersType extends Document {
  _id: string;
  name?: string;
  introduction?: string;
  email: string;
  hashedPass: string;
  createdAd: Date;
  updatedAt: Date;
}
const userSchema = new Schema<IUsersType>({
  _id: { type: String, default: uuidv4() },
  name: { type: String, required: false },
  introduction: { type: String, required: false },
  email: { type: String, required: true },
  hashedPass: { type: String, required: true },
  createdAd: { type: Date, default: Date.now() },
  updatedAt: { type: Date, default: Date.now() },
});

export const userModel = model<IUsersType>('user', userSchema);
