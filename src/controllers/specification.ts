import { NextFunction, Request, Response } from 'express';
import ISpecification from '../interfaces/specification';
import Specification from '../modals/specifications';

const getAllSpecification = (req: Request, res: Response, next: NextFunction) => {

    Specification.find()
        .populate('specification_group_id')
        .then((result1: any) => {
            return res.json(result1);
        })
        .catch((error1: any) => {
            console.log("error1", error1)
            return res.status(500).json({
                message: error1.message,
            });
        });
};


const addSpecification = (req: Request, res: Response, next: NextFunction) => {

    const { specificationLabel, description, group_name } = req.body;
    console.log(specificationLabel, description, group_name)
    const specification: ISpecification = new Specification({
        specification_name: req.body.specificationLabel,
        description: req.body.description,
        specification_group_id: req.body.group_name
    });


    specification.save()
        .then((result: any) => {
            Specification.find({ '_id': result._id })
                .populate('specification_group_id')
                .then((result1: any) => {
                    return res.json(result1);
                })
                .catch((error1: any) => {
                    return res.status(500).json({
                        message: error1.message,
                    });
                });
        })
        .catch((error1: any) => {
            return res.status(500).json({
                message: error1.message,
            });
        });
};

const deleteSpecification = (req: Request, res: Response, next: NextFunction) => {

    const specification_ids: Array<String> = req.body;

    Specification.deleteMany({ _id: { $in: specification_ids } })
        .then((result1: any) => {
            console.log("specification", result1)
            return res.json(result1);
        })
        .catch((error1: any) => {
            console.log("error1", error1)
            return res.status(500).json({
                message: error1.message,
            });
        });


}

export { addSpecification, getAllSpecification, deleteSpecification };