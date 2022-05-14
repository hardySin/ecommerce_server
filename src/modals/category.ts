import { Mongoose, Schema, Model, model } from "mongoose";
import ICategory from "../interfaces/category";

const CategorySchema: Schema = new Schema(
  {
    categoryName:
    {
      type: String,
      required: [true, 'Please Enter the Valid Category Name'],
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

const Category = model<ICategory>('Category', CategorySchema);

module.exports = Category;

// export const Category: Model<ICategory> = model<ICategory>('Category', CategorySchema);

// export default Category;

