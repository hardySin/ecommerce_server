import { NextFunction, Request, Response } from "express";
import {Jwt} from "jsonwebtoken";



const max = 3 * 24 * 60 * 60;

const auth = (req: Request, res: Response, next: NextFunction) => {
console.log("sdds")
    next()
}


const createToken = (id: any) => {
    // here the second arguments is be secure bec. if any knows the key it can access the data
//    return Jwt.sign({ id }, process.env.ACCESS_TOKEN_SERCET, { expiresIn: max })
}


export { auth };