import { Document } from 'mongoose';


export default interface IProduct extends Document {

    product_id: string
    productName: string;
    ShortDescription: string;
    FullDescription: string;
    MetaTitle: string;
    MetaDescription: string;
    MetaKeywords: string;
    created_On: Date;
    created_Id: string;
    modified_On: Date;
    modified_Id: string;
    isActive: boolean;
    activeBy: string;
    isDeleted: boolean;
    deleteBy: string;
    deleted_date: Date;
    isViewed: boolean;
}