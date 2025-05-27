import mongoose from 'mongoose';
import { Schema, models } from 'mongoose';

export interface IUser extends mongoose.Document {
  socialTitle?: string; // Mr, Mrs, Ms
  fullName: string;
  email: string;
  password: string;
  birthdate?: Date;
  createdAt: Date;
  updatedAt: Date;
}

const UserSchema = new Schema<IUser>(
  {
    socialTitle: {
      type: String,
      enum: ['Mr', 'Mrs', 'Ms'],
      required: false,
    },
    fullName: {
      type: String,
      required: [true, 'Full name is required'],
      trim: true,
    },
    email: {
      type: String,
      required: [true, 'Email is required'],
      unique: true,
      trim: true,
      lowercase: true,
      match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please provide a valid email address'],
    },
    password: {
      type: String,
      required: [true, 'Password is required'],
      minlength: [8, 'Password must be at least 8 characters long'],
    },
    birthdate: {
      type: Date,
      required: false,
    },
  },
  {
    timestamps: true,
  }
);

// Create the model only if it doesn't exist already
const User = models.User || mongoose.model<IUser>('User', UserSchema);

export default User;