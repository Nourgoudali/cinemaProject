// server/middleware/authMiddleware.js
import jwt from 'jsonwebtoken';
import { isTokenBlacklisted } from './tokenBlacklist.js';


export const authMiddleware = (roles) => (req, res, next) => {
    const token = req.headers["authorization"]?.split(' ')[1];
    
    if (!token || isTokenBlacklisted(token)) {
        return res.status(401).send({ message: "Unauthorized" });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded;

        // Check for roles if provided
        if (roles && !roles.includes(decoded.role)) {
            return res.status(403).send({ message: "Forbidden" });
        }

        next();
    } catch (error) {
        return res.status(401).send({ message: "Unauthorized" });
    }
};
