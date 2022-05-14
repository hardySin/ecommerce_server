import { Mongoose, Schema, Model, model } from "mongoose";
import IGeneralInfo from "../interfaces/generalInfo";


const GeneralInfoSchema: Schema = new Schema(
  {
    
    brand:
    {
      type: String,
      required: [true, 'Please Enter the Valid Product Description'],
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

  }
);

const GeneralInfo = model<IGeneralInfo>('GeneralInfo', GeneralInfoSchema);
module.exports = GeneralInfo;


