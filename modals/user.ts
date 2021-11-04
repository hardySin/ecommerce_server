import { Mongoose, Schema, Model, model } from "mongoose";
import IUser from "../interfaces/user";

const UserSchema: Schema = new Schema(
  {
    username:
    {
      type: String,
      required: [true, 'Please Enter the Valid User Name'],
    },

    emailId:
    {
      type: String,
      required: [true, 'Please Enter the Valid Email Id'],
    },

    password:
    {
      type: String,
      required: [true, 'Please Enter the Valid Password'],
    },

    isVerfied:
    {
      type: Boolean,
      default: false
    },

    created_On:
    {
      type: Date,
      default: Date.now
    },

    created_Id:
    {
      type: String,
      default: 0
    },

    modified_On:
    {
      type: Date,
      default: Date.now
    },

    modified_Id:
    {
      type: String,
      default: 0
    },

    isActive:
    {
      type: Boolean,
      default: true
    },

    activeBy:
    {
      type: String,
      default: 0
    },

    activeDate:
    {
      type: Date,
      default: Date.now
    },

    isDeleted:
    {
      type: Boolean,
      default: false
    },

    deleteBy:
    {
      type: String,
      default: 0
    },

    deleted_date:
    {
      type: Date,
      default: Date.now
    },
  }
);

const User = model<IUser>('User', UserSchema);

module.exports = User;

// export const Category: Model<ICategory> = model<ICategory>('Category', CategorySchema);

// export default Category;

