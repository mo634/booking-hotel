import express from "express"
import {register,login} from "../controllers/auth.controller"
import {validate} from  "../utlis/register.validation"
import { check } from "express-validator"

const router = express.Router()

router.post("/register",
check("firstName","first name is required").isString(),
check("lastName","last name is required").isString(),
check("password","password is required at least 6").isLength({min:6}),
check("email","please enter a valid email").isEmail(),
validate,register)

router.post("/login",
check("password","password is required at least 6").isLength({min:6}),
check("email","please enter a valid email").isEmail(),
validate,login)


export default router