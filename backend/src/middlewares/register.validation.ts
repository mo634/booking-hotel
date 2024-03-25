import { Request, Response } from "express";
import { check, validationResult } from "express-validator";


export const registerValidationRules  = () => [
    check("firstName","first name is required").isString(),
    check("lastName","last name is required").isString(),
    check("password","password is required at least 6").isLength({min:6}),
    check("email","please enter a valid email").isEmail(),
]

export const validate = (req:Request,res:Response,next:Function) => {
    const errors = validationResult(req)
    if(!errors.isEmpty()){
        return res.status(400).json({errors:errors.array()})
    }
    next()
}