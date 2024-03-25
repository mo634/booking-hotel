import { validationResult } from "express-validator"
import User from "../models/user.model"
import jwt from 'jsonwebtoken';
import {Request,Response} from "express"
import { errorHandler } from "../utlis/erorrHandler";
import bycrpt from "bcryptjs"
export const register = async(req:Request,res:Response,next : Function) => {

    
    const user = req.body
    try {
        const isUserExist =await User.findOne({email:user.email})

        if(isUserExist){
            return next(errorHandler(400,"user already exist"))
        }

        const newUser = new User(user)
        await newUser.save()

        // create token 
        const token = jwt.sign({id:newUser._id},process.env.JWT_SECRET as string)

        // store token in cookie
        res.cookie("access_token",token,{httpOnly:true,secure:process.env.NODE_ENV !== "production"})

        return res.status(200).json({token,messg:"user created successfully"})

    } catch (error) {
        next(error)
    }

}

export const login = async(req:Request,res:Response,next: Function) => {

    const {email,password} = req.body 
    
    try {
        
        const user = await User.findOne({email}) 

        if(!user){
            return next(errorHandler(400,"invalid credentials"))
        }

        const isMatch = await bycrpt.compare(password,user.password) 

        if(!isMatch){
            return next(errorHandler(400,"invalid credentials"))
        }

        const token = jwt.sign({id:user._id},process.env.JWT_SECRET as string)

        // store token in cookie
        res.cookie("access_token",token,{httpOnly:true,secure:process.env.NODE_ENV !== "production"})
    
        return res.status(200).json({messg:"user logged in successfully",
    userId:user._id
    })
    } catch (error) {
        console.log(error)
        return res.status(400).json(error)
    }
}