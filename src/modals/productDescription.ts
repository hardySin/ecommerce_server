import { Mongoose, Schema, Model, model } from "mongoose";
import ProductDescription from "../interfaces/productDescription";


const ProductDescriptionSchema: Schema = new Schema(
  {

    productDescription:
    {
      type: String,
      required: [true, 'Please Enter the Valid Product Description'],
    },

    metaTitle:
    {
      type: String,
      required: [true, 'Please Enter the Valid Meta Title'],
    },

    metaKeyword:
    {
      type: String,
      required: [true, 'Please Enter the Valid Meta Keyword'],
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


  }
);


const ProductDescription = model<ProductDescription>('ProductDescription', ProductDescriptionSchema);
module.exports = ProductDescription;

 
