import { NextFunction, Request, Response } from 'express';
import mongoose from 'mongoose';
import IGeneralInfo from '../interfaces/generalInfo';
const GeneralInfo = require('./../modals/generalInfo');
const Product = require('../modals/product');



const createGeneralInfo = (req: Request, res: Response, next: NextFunction) => {

    const { brandname } = req.body.generalInfo;
    const prod_id = req.body.prod_id;

    console.log("brandname ", req.body, brandname, typeof prod_id)

    const generalInfo = new GeneralInfo({
        brand: brandname
    });

    return generalInfo
        .save()
        .then((result: any) => {
            console.log("result1", result)
            let updateQuery = { 'generalInfo_id': result._id }
            Product.findOneAndUpdate({ _id: prod_id }, updateQuery, { upsert: true, useFindAndModify: false })
                .then(async (result1: any) => {
                    console.log("result2", result1)
                    return res.json(result1);
                })
                .catch((error1: any) => {
                    console.log("error1", error1)
                    return res.status(500).json({
                        message: error1.message,
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


const updateGeneralInfo = (req: Request, res: Response, next: NextFunction) => {

    console.log("updateGeneralInfo ",req.body)
    const { brandname } = req.body.generalInfo;
    const prod_id  = req.body.prod_id;

    console.log("updateGeneralInfo ",brandname ,prod_id)

    let query = { '_id': prod_id };
    Product.find(query)
        .then(async (result1: any) => {
            console.log("result1" ,result1)
            let updateQuery = { 'brand': brandname }
            console.log(result1)
            GeneralInfo.findOneAndUpdate({ _id: result1[0].generalInfo_id }, updateQuery, { upsert: true, useFindAndModify: false })
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

const getGeneralInfo = (req: Request, res: Response, next: NextFunction) => {
    for (var property in req.body) {
        console.log(property);
        if (property !== "" || property !== undefined) {
            var query = { _id: property };
            Product.find(query)
                .then(async (result1: any) => {
                    console.log("generalInfo_id ", result1, result1[0].generalInfo_id)
                    GeneralInfo.find({ _id: result1[0].generalInfo_id })
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

module.exports = { createGeneralInfo, getGeneralInfo, updateGeneralInfo };
