import { NextFunction, Request, Response } from 'express';
import mongoose from 'mongoose';
import IProductDescription from '../interfaces/productDescription';
const ProductDescription = require('../modals/productDescription');

const createProductDescription = (req: Request, res: Response, next: NextFunction) => {


    const productDescription = new ProductDescription({

        productDescription: req.body.productDescription,
        metaTitle: req.body.metaTitle,
        metaKeyword: req.body.metaKeyword
    });

    return productDescription
        .save()
        .then((result: any) => {
            return res.status(201).json({
                productDescription: result
            });
        })
        .catch((error: any) => {
            return res.status(500).json({
                message: error.message,
                error
            });
        });
};

const updateProductDescription = (req: Request, res: Response, next: NextFunction) => {

    const productDescription: IProductDescription = new ProductDescription({

        productDescription: req.body.productDescription,
        metaTitle: req.body.metaTitle,
        metaKeyword: req.body.metaKeyword,
        productDescription_id: req.body._id
    });

};


module.exports = { createProductDescription };
