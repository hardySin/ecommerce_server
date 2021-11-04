import { NextFunction, Request, Response } from 'express';
import mongoose from 'mongoose';
import IProductImage from '../interfaces/productImage';
const ProductImage = require('../modals/productImage');

 const  addProductImage:any = (req: Request, res: Response, next: NextFunction) => {
  
     const productImage:IProductImage = new ProductImage({
        productImage: req.files
     });

     return productImage
        .save()
        .then((result:any) => {
            return res.status(201).json({
                book: result
            });
        })
        .catch((error:any) => {
            return res.status(500).json({
                message: error.message,
                error
            });
        });
};


const  deleteProductImage:any = (req: Request, res: Response, next: NextFunction) => {
  
    const productImage:IProductImage = new ProductImage({
       productImage_id:req.body._id
    });

 };
 
module.exports= {addProductImage};