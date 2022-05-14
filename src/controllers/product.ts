import { NextFunction, Request, Response } from 'express';
import IProductImage from '../interfaces/productImage';
import IGeneralInfo from '../interfaces/generalInfo';
import IProductDescription from '../interfaces/productDescription';
import ICategory from '../interfaces/category';
import IProduct from '../interfaces/product';

const Product = require('../modals/product');

const ProductDescription = require('../modals/productDescription');
const Category = require('../modals/category');


const createProduct = (req: Request, res: Response, next: NextFunction) => {

    const { productName, subText, shortDescription, fullDescription, metaTitle, metaDescription, metaKeywords } = req.body;
    console.log(productName, subText, shortDescription, fullDescription, metaTitle, metaDescription, metaKeywords)

    const product: IProduct = new Product({
        adads:2312,
        productName: req.body.productName,
        subText: req.body.subText,
        shortDescription: req.body.shortDescription,
        fullDescription: req.body.fullDescription,
        metaTitle: req.body.metaTitle,
        metaDescription: req.body.metaDescription,
        metaKeywords: req.body.metaKeywords
    });


    product.save()
        .then(async (result1: any) => {
            return res.json(result1);
        })
        .catch((error1: any) => {
            console.log("error1", error1)
            return res.status(500).json({
                message: error1.message,
            });
        });
};

const updateProduct = (req: Request, res: Response, next: NextFunction) => {
    const { productName, subText, status, price, discount, prod_id } = req.body;

    let query = { '_id': prod_id };
    let updateQuery = { 'productName': productName, 'subText': subText, 'status': status, 'price': price, 'discount': discount }
    Product.findOneAndUpdate(query, updateQuery, { upsert: true, useFindAndModify: false })
        .then(async (result1: any) => {
            return res.json(result1);
        })
        .catch((error1: any) => {
            console.log("error1", error1)
            return res.status(500).json({
                message: error1.message,
            });
        });

};



const getAllProducts = (req: Request, res: Response, next: NextFunction) => {

    Product.find()
        .populate('category_id productDescription_id product_image_ids')
        .then(async (result1: any) => {
            console.log("result :", result1)
             return res.json(result1);
        })
        .catch((error1: any) => {
            console.log("error1", error1)
            return res.status(500).json({
                message: error1.message,
            });
        });
};

const getProduct = (req: Request, res: Response, next: NextFunction) => {

    console.log("getProduct ", req.body)
    for (var property in req.body) {
        console.log(property);
        if (property !== "" || property !== undefined) {
            var query = { _id: property };
            console.log("query ", query)
            Product.find(query)
                .populate('category_id productDescription_id product_image_ids')
                .then(async (result1: any) => {
                    console.log("result :", result1)
                    return res.json({ result1 });
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



module.exports = { createProduct, getAllProducts, getProduct, updateProduct };
