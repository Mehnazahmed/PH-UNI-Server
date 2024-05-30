import { Schema, model } from 'mongoose';
import { TUser } from './user.interface';
import bcrypt from 'bcrypt';
import config from '../../config';

const userSchema = new Schema<TUser>(
  {
    id: {
      type: String,
      required: [true, 'User ID is required'],
      unique: true,
    },
    password: {
      type: String,
      required: [true, 'Password is required'],
      maxlength: [20, 'Password cannot be more than 20 characters'],
    },
    needsPasswordChange: {
      type: Boolean,
      required: [true, 'Needs password change status is required'],
      default: true,
    },
    role: {
      type: String,
      enum: ['admin', 'student', 'faculty'],
      required: [true, 'Role is required'],
    },
    status: {
      type: String,
      enum: ['in-progress', 'blocked'],
      required: [true, 'Status is required'],
      default: 'in-progress',
    },
    isDeleted: {
      type: Boolean,
      default: false,
    },
  },
  {
    toJSON: {
      virtuals: true,
    },
    toObject: {
      virtuals: true,
    },
    timestamps: true,
  },
);

// Pre-save middleware to hash the password
userSchema.pre('save', async function (next) {
  const user = this;
  if (user.isModified('password')) {
    // Only hash the password if it has been modified (or is new)
    user.password = await bcrypt.hash(
      user.password,
      Number(config.bcrypt_salt_rounds),
    );
  }
  next();
});

//post save middleware
userSchema.post('save', function (doc, next) {
  doc.password = '';
  next();
});

export const User = model<TUser>('User', userSchema);
