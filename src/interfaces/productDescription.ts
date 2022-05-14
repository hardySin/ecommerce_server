import { Document } from 'mongoose';

export default interface IProductDescription extends Document {

    productDescription_id: string;
    productDescription: string;
    metaTitle: string;
    metaKeyword: string
}