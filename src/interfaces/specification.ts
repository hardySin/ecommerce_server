import { Document } from 'mongoose';

export default interface ISpecification extends Document {

    specification_name: string
    description: string
    specification_group_id: string
    created_On: Date
    created_Id: number
    modified_On: Date
    modified_Id: number
    isActive: boolean
    activeBy: number
    activeDate: Date
    isDeleted: boolean
    deleteBy: number
    deleted_date: Date


}