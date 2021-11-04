import { Document } from 'mongoose';

export default interface IGeneralInfo extends Document {
    
    general_id:string;
    brand:string;
    }