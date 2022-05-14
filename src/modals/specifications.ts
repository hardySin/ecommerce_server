import { Document, Schema, Model, model } from 'mongoose';
import ISpecification from "../interfaces/specification";


const SpecificationSchema = new Schema<ISpecification>(
    {
        specification_name:
        {
            type: String,
            required: [true, 'Please Enter the Valid Product Name'],
        },

        description:
        {
            type: String,
            required: [true, 'Please Enter the Valid subText'],
        },

        specification_group_id:
        {
            type: Schema.Types.ObjectId,
            ref: 'SpecificationGroup'
        },

        created_On:
        {
            type: Date,
            default: Date.now
        },

        created_Id:
        {
            type: Number,
            default: 0
        },

        modified_On:
        {
            type: Date,
            default: Date.now
        },

        modified_Id:
        {
            type: Number,
            default: 0
        },

        isActive:
        {
            type: Boolean,
            default: true
        },

        activeBy:
        {
            type: Number,
            default: 0
        },

        activeDate:
        {
            type: Date,
            default: Date.now
        },

        isDeleted:
        {
            type: Boolean,
            default: false
        },

        deleteBy:
        {
            type: Number,
            default: 0
        },

        deleted_date:
        {
            type: Date,
            default: Date.now
        }

    }
);

const Specification = model<ISpecification>('Specification', SpecificationSchema);

export default Specification;

