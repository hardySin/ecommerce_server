import { Document, Schema, Model, model } from 'mongoose';
import IProduct from "../interfaces/product";


const ProductSchema: Schema = new Schema(
  {
    productName:
    {
      type: String,
      required: [true, 'Please Enter the Valid Product Name'],
    },

    subText:
    {
      type: String,
      required: [true, 'Please Enter the Valid Sub Text'],
    },

    status:
    {
      type: String,
      required: [true, 'Please Enter the Valid Status'],
    },

    price:
    {
      type: String,
      required: [true, 'Please Enter the Valid Price'],
    },

    discount:
    {
      type: String,
      required: [true, 'Please Enter the Valid Discount'],
    },

    category_id:
    {
      type: Schema.Types.ObjectId,
      ref: 'Category'
    },

    productDescription_id:
    {
      type:  Schema.Types.ObjectId ,
      ref: 'ProductDescription'
    },

    product_image_ids:
    [{
      type: Schema.Types.ObjectId,
      ref: 'ProductImage'
    }],

    generalInfo_id:
    {
      type: Schema.Types.ObjectId,
      ref: 'GeneralInfo'
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

    isViewed:
    {
      type: Boolean,
      default: false
    },

  }
);


const Product = model<IProduct>('Product', ProductSchema);

module.exports = Product;

