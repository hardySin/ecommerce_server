import { NextFunction, Request, Response } from 'express';
import mongoose from 'mongoose';
import IProductImage from '../interfaces/productImage';
const ProductImage = require('../modals/productImage');
const Product = require('../modals/product');

const addProductImage: any = (req: Request, res: Response, next: NextFunction) => {

    let id = req.query.product_id; // $_GET["id"]

    console.log(req.files, id)

    const productImage: IProductImage = new ProductImage({
        productImage: req.files
    });

    return productImage
        .save()
        .then((result: any) => {
            Product.find({ _id: id })
                .then((result1: any) => {
                    let imageArr = result1[0].product_image_ids
                    console.log(" product Image", result1[0].product_image_ids)
                    imageArr.push(result._id)
                    console.log("imageArr", imageArr)

                    let updateQuery = { 'product_image_ids': imageArr }
                    Product.findOneAndUpdate({ _id: id }, updateQuery, { upsert: true, useFindAndModify: false })
                        .then((result: any) => {
                            return res.status(201).json({
                                book: result
                            });
                        });
                });


        })
        .catch((error: any) => {
            return res.status(500).json({
                message: error.message,
                error
            });
        });
};


const deleteProductImage: any = (req: Request, res: Response, next: NextFunction) => {

    const productImage: IProductImage = new ProductImage({
        productImage_id: req.body._id
    });

};


const getProductImage = (req: Request, res: Response, next: NextFunction) => {
    console.log("req.body.product_id ", req.body)
    for (var property in req.body) {
        console.log(property);
        if (property !== "" || property !== undefined) {
            var query = { _id: property };
            let images: Array<any> = [];

            Product.find(query)
                .populate('product_image_ids')
                .then(async (result1: any) => {
                    return res.json(result1);
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


module.exports = { addProductImage, getProductImage };