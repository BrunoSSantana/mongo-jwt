import { Schema, model } from 'mongoose'

export interface User {
  name: string;
  email: string;
  password: string;
  createdAt: Date;
}

const userSchema = new Schema<User>({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    unique: true,
    required: true,
    lowercase: true
  },
  password: {
    type: String,
    required: true,
    select: false
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
})

export const UserModel = model<User>('User', userSchema)
