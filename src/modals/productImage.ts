import { Mongoose, Schema, Model, model } from "mongoose";
import IProductImage from "../interfaces/productImage";


const ProductImageSchema: Schema = new Schema(
  {
    productImage:
    {
      type: [],
      required: [true, 'Please Enter the Valid Product Image'],
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


const ProductImage = model<IProductImage>('ProductImage', ProductImageSchema);
module.exports = ProductImage;

 
