import { Document } from 'mongoose';

export default interface ISpecificationGroup extends Document {

    group_name: string;
    description: string;
}