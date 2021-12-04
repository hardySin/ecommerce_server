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

    const { productName, subText, status, price, discount } = req.body;
    console.log(productName, subText, status, price, discount)

    const product: IProduct = new Product({
        productName: req.body.productName,
        subText: req.body.subText,
        status: req.body.status,
        price: req.body.price,
        discount: req.body.discount
    });

    const productDescription: IProductDescription = new ProductDescription({

        productDescription: req.body.productDescription,
        metaTitle: req.body.metaTitle,
        metaKeyword: req.body.metaKeyword
    });

    product.save()
        .then(async (result1: any) => {
            await Product.findOneAndUpdate({ '_id': result1._id }, { 'category_id': req.body.category }, { upsert: true, useFindAndModify: false })
                .then((result3: any) => {
                    productDescription.save()
                        .then(async (result4: any) => {
                            await Product.findOneAndUpdate({ '_id': result1._id }, { 'productDescription_id': result4._id }, { upsert: true, useFindAndModify: false })
                                .then((result5: any) => {
                                    return res.status(200).json({ result5 })
                                })
                                .catch((error5: any) => {
                                    console.log("error5", error5)
                                    return res.status(500).json({
                                        message: error5.message,
                                    });
                                });
                        })
                        .catch((error4: any) => {
                            console.log("error4", error4)
                            return res.status(500).json({
                                message: error4.message,
                            });
                        });


                })
                .catch((error3: any) => {
                    console.log("error3", error3)
                    return res.status(500).json({
                        message: error3.message,
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
            console.log("result :" ,result1)

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
                    console.log("result :" ,result1)
                    return res.json({result1});
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
