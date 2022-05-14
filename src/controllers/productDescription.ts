import { NextFunction, Request, Response } from 'express';
import mongoose from 'mongoose';
import IProductDescription from '../interfaces/productDescription';

const ProductDescription = require('../modals/productDescription');
const Product = require('../modals/product');

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

    const { productDescription, metaTitle, metaKeyword, prod_id } = req.body;

    let query = { '_id': prod_id };
    Product.find(query)
        .then(async (result1: any) => {
            let updateQuery = { 'productDescription': productDescription, 'metaTitle': metaTitle, 'metaKeyword': metaKeyword }
            ProductDescription.findOneAndUpdate({ _id: result1.productDescription_id }, updateQuery, { upsert: true, useFindAndModify: false })
                .then(async (result1: any) => {
                    return res.json(result1);
                })
                .catch((error1: any) => {
                    console.log("error1", error1)
                    return res.status(500).json({
                        message: error1.message,
                    });
                });

        })
        .catch((error1: any) => {
            console.log("error1", error1)
            return res.status(500).json({
                message: error1.message,
            });
        });



};


const getDescription = (req: Request, res: Response, next: NextFunction) => {

    for (var property in req.body) {
        console.log(property);
        if (property !== "" || property !== undefined) {
            var query = { _id: property };
            Product.find(query)
                .then(async (result1: any) => {
                     ProductDescription.find({ _id: result1[0].productDescription_id })
                        .then(async (result1: any) => {
                            return res.json(result1);

                        })
                        .catch((error1: any) => {
                            console.log("error1", error1)
                            return res.status(500).json({
                                message: error1.message,
                            });
                        });

                })
                .catch((error1: any) => {
                    console.log("error1", error1)
                    return res.status(500).json({
                        message: error1.message,
                    });
                });
        }
    }
};

module.exports = { createProductDescription, getDescription, updateProductDescription };
