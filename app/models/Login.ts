import mongoose from 'mongoose';
import { Schema, models } from 'mongoose';

export interface ILogin extends mongoose.Document {
  userId: mongoose.Types.ObjectId;
  email: string;
  loginTime: Date;
  successful: boolean;
  ipAddress?: string;
  userAgent?: string;
}

const LoginSchema = new Schema<ILogin>(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Signup',
      required: false, // Not required for failed login attempts
    },
    email: {
      type: String,
      required: [true, 'Email is required'],
      trim: true,
      lowercase: true,
    },
    loginTime: {
      type: Date,
      default: Date.now,
    },
    successful: {
      type: Boolean,
      default: false,
    },
    ipAddress: {
      type: String,
      required: false,
    },
    userAgent: {
      type: String,
      required: false,
    },
  },
  {
    timestamps: true,
  }
);

// Create the model only if it doesn't exist already
const Login = models.Login || mongoose.model<ILogin>('Login', LoginSchema, 'logins');

export default Login;
