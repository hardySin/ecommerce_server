import { Document } from 'mongoose';

export default interface IProductImage extends Document {
    //req.body.file
    productImage_id:string;
    productImage:string;
    }