import { NextFunction, Request, Response } from 'express';
import ISpecificationGroup from '../interfaces/specification_group';
import SpecificationGroup from '../modals/specification_group';

const getAllSpecificationGroup = (req: Request, res: Response, next: NextFunction) => {

    SpecificationGroup.find()
        .then((result1: any) => {
            console.log("SpecificationGroups :", result1)
            return res.json(result1);
        })
        .catch((error1: any) => {
            console.log("error1", error1)
            return res.status(500).json({
                message: error1.message,
            });
        });
};

const AddSpecificationGroup = (req: Request, res: Response, next: NextFunction) => {

    const specificationGroup: ISpecificationGroup = new SpecificationGroup({
        group_name: "Material",
        description: "This is Material",
    });

    specificationGroup.save()
        .then(async (result1: any) => {
            console.log("specificationGroup save", result1)
            return res.json(result1);
        })
        .catch((error1: any) => {
            console.log("error1", error1)
            return res.status(500).json({
                message: error1.message,
            });
        });


}

export { getAllSpecificationGroup, AddSpecificationGroup }



