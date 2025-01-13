import jwt from "jsonwebtoken";

// for authorization purpose 
export const authVerifyAuthorization = (req, res, next) => {
    try {
        // request token from body
        const token = req.cookies.token;
        if(!token) {
            return res.status(400).json({ success: false, message: "Token is not available"})
        }
        // decode to verify the user 
        const decode = jwt.verify(token, process.env.JWT_SECRET)
        if(!decode) {
            return res.status(403).json({ success: false, message: "Unauthorized to access this page"})
        }
        // if userId === decode.userId is equal
        req.userId = decode.userId
        // calling next function
        
        next()
    }
    catch (error) {
        return res.status(500).json({ success: false, message: "Internal server error || authorization failed"})
    }
}