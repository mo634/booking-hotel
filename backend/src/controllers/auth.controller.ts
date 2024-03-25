import { validationResult } from "express-validator"
import User from "../models/user.model"
import jwt from 'jsonwebtoken';
import {Request,Response} from "express"

export const register = async(req:Request,res:Response) => {

    
    const user = req.body
    try {
        const isUserExist =await User.findOne({email:user.email})

        if(isUserExist){
            return res.status(200).json("user already exist")
        }

        const newUser = new User(user)
        await newUser.save()

        // create token 
        const token = jwt.sign({id:newUser._id},process.env.JWT_SECRET as string)

        // store token in cookie
        res.cookie("access_token",token,{httpOnly:true,secure:process.env.NODE_ENV !== "production"})

        return res.status(200).json({token,messg:"user created successfully"})

    } catch (error) {
        return res.status(500).json(error)
    }

}