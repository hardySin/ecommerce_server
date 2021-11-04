import { NextFunction, Request, Response } from 'express';
import mongoose from 'mongoose';
import IGeneralInfo from '../interfaces/generalInfo';
const GeneralInfo = require('./../modals/generalInfo');


const createGeneralInfo = (req: Request, res: Response, next: NextFunction) => {


    const generalInfo = new GeneralInfo({
        brand: req.body.brand
    });

    return generalInfo
        .save()
        .then((result: any) => {
            return res.status(201).json({
                generalInfo: result
            });
        })
        .catch((error: any) => {
            return res.status(500).json({
                message: error.message,
                error
            });
        });
};


const updateGeneralInfo = (req: Request, res: Response, next: NextFunction) => {

    const productDescription: IGeneralInfo = new GeneralInfo({

        productDescription: req.body.productDescription,
        metaTitle: req.body.metaTitle,
        metaKeyword: req.body.metaKeyword,
        productDescription_id: req.body._id
    });

};


module.exports = { createGeneralInfo };
