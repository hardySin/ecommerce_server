import { Document } from 'mongoose';

export default interface ICategory extends Document {
    
    category_id:string;
    categoryName:string;
    }