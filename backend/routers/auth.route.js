import express from "express";
import { checkAuthWorking, deleteAccount, forgotPassword, login, logout, resetOldPassword, signup, verifyEmail } from "../controllers/auth.controller.js";
import { deleteUserMiddleware, forgotPasswordMiddleWare, loginmiddleware, resetPasswordMiddleware, signupmiddleware, verifymiddleware } from "../middlewares/auth.signup.middleware.js";
import { authVerifyAuthorization } from "../middlewares/authVerify.js";

const authrouter = express.Router();

authrouter.route("/signup").post(signupmiddleware, signup)
authrouter.route("/verify-email").post(verifymiddleware, verifyEmail)

authrouter.route("/login").post(loginmiddleware, login)
authrouter.route("/logout").post(authVerifyAuthorization, logout)
authrouter.route("/delete-user").post(authVerifyAuthorization, deleteUserMiddleware, deleteAccount)

authrouter.route("/forgot-password").post(forgotPasswordMiddleWare ,forgotPassword)
authrouter.route("/reset-password/new-password").post(resetPasswordMiddleware, resetOldPassword)


authrouter.route("/check-auth").get(authVerifyAuthorization, checkAuthWorking)
export default authrouter