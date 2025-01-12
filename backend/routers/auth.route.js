import express from "express";
import { login, signup } from "../controllers/auth.controller.js";
import { signupmiddleware } from "../middlewares/auth.signup.middleware.js";

const authrouter = express.Router();

authrouter.route("/signup").post(signupmiddleware, signup)
authrouter.route("/login").post(login)
// authrouter.route("/logout")


export default authrouter