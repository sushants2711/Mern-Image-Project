
import userModel from "../models/user.model.js";
import bcrypt from "bcryptjs";
import { generateVerificationCode } from "../utils/generateVerificationCode.js";
import { generateTokenAndSetCookies } from "../utils/generateTokenAndSetCookies.js";


export const signup = async (req, res) => {
    try {
        // take request from body
        const { name, email, password, confirmpassword } = req.body;

        // compare the user password and confirm password
        if (password !== confirmpassword) {
            return res.status(400).json({ success: false, message: "Password not match" })
        }

        // check user is already exist or not from an our database
        const userExist = await userModel.findOne({ email })
        if (userExist) {
            return res.status(400).json({ success: false, message: "User already exist" })
        }

        // hash the password
        const salt_round = 10;
        const hash_password = await bcrypt.hash(password, salt_round);

        // generate a function for otp-generate 
        const verificationToken = generateVerificationCode();

        // all the information should be store in our database 
        const user = new userModel({
            name,
            email,
            password: hash_password,
            verificationToken,
            verificationTokenExpiresAt: Date.now() + 10 * 60 * 1000
        })

        // save the data in our database 
        await user.save();

        // jwt token function created and calling 
        generateTokenAndSetCookies(res, user._id)
        
        return res
            .status(201)
            .json({
                success: true,
                message: "User created successfully",
                user: {
                    ...user._doc,
                    password: undefined
                }
              
            })
    } catch (error) {
        return res.status(500).json({ success: false, message: "Internal server error" })
    }
}

export const login = async (req, res) => {

}

export const logout = async (req, res) => {

}