import { Document } from 'mongoose';

export default interface IUser extends Document {
    
    user_id:string;
    username:string;
    useremail:string;
    userpassowrd:string;
    }