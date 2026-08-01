import jwt from "jsonwebtoken";
import "dotenv/config";

const accessSecret = process.env.ACCESS_SECRET;
const accessExpires = process.env.ACCESS_EXPIRES;

if(!accessSecret) {
    throw new Error("JWT secrets não configurados");
}

const JWT = {
    generateAccessToken(payload) {
        return jwt.sign(payload, accessSecret, {
            expiresIn: accessExpires,
        });
    },

    verifyAccessToken(token) {
        return jwt.verify(token, accessSecret);
    },

    decode(token) {
        return jwt.decode(token);
    }
};

export default JWT;