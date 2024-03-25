import express from "express"
import {register} from "../controllers/auth.controller"
import {registerValidationRules, validate} from  "../middlewares/register.validation"

const router = express.Router()

router.post("/register",registerValidationRules(),validate,register)

export default router