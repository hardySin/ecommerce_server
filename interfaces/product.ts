import { Document } from 'mongoose';


export default interface IProduct extends Document {
     
    product_id:string
    productName:string;
    subText:string;
    status: string;
    price: string;
    discount: string;
    category_id:string;
    productDescription_id:string;
    product_image_ids: string;
    generalInfo_id : string; 
    created_On : Date ;
    created_Id : string; 
    modified_On  : Date;
    modified_Id: string; 
    isActive:  boolean; 
    activeBy:  string;    
    isDeleted : boolean; 
    deleteBy:string;
    deleted_date: Date;
    isViewed: boolean;
 }