import User from "../modals/user";
import { NextFunction, Request, Response } from 'express';
import mongoose from 'mongoose';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
const max = 3 * 24 * 60 * 60;
const sercet:any=process.env.ACCESS_TOKEN_SERCET


const createUser = (req: Request, res: Response, next: NextFunction) => {

    let saltRounds: number = 10
    const { username, useremail, password } = req.body;

    console.log("useCallback signup", username, useremail, password);
    let password1 = req.body.password;
    console.log(password1, req.body.password)
    bcrypt.genSalt(saltRounds, (err1: any, salt: any) => {
        if (!err1) {
            bcrypt.hash(password, salt, (err2: any, hash: any) => {
                if (!err2) {
                    const user = new User({
                        username: username,
                        emailId: useremail,
                        password: hash
                    });
                    return user
                        .save()
                        .then((result: any) => {

                            const myJSON = JSON.stringify(result._id);

                            const token = createToken(myJSON)

                            return res.status(201).json({
                                token: token
                            });
                        })
                        .catch((error: any) => {
                            console.log(error);
                            return res.status(500).json({
                                message: error.message
                            });
                        });
                }
            })
        }
    });
}

const findAllUsers = (req: Request, res: Response, next: NextFunction) => {
    User.find()
        .then(async (result: any) => {

            return res.status(200).json({ result })
        })
        .catch((error: any) => {
            return res.status(500).json({
                message: error.message,
                error
            });
        });
}

const createToken = (id: string) => {
    return jwt.sign({ id }, sercet , { expiresIn: max })
}


module.exports = { createUser, findAllUsers };
