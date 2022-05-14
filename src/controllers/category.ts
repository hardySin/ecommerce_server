const Category = require('../modals/category');
import { NextFunction, Request, Response } from 'express';
import mongoose from 'mongoose';

const createCategory = (req: Request, res: Response, next: NextFunction) => {

    const category = new Category({
        categoryName: req.body.category
    });

    return category
        .save()
        .then((result: any) => {
            return res.status(201).json({
                category: result
            });
        })
        .catch((error: any) => {
            return res.status(500).json({
                message: error.message,
                error
            });
        });
};



const getAllCategory = (req: Request, res: Response, next: NextFunction) => {
    Category.find()
        .then(async (result: any) => {
            return res.status(200).json({ result })
        })
        .catch((error: any) => {
            return res.status(500).json({
                message: error.message,
                error
            });
        });
};


module.exports = { createCategory ,getAllCategory };
