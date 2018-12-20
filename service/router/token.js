import jwt from 'jsonwebtoken';
import expressJwt from "express-jwt";

const jwtAuth = expressJwt({ secret: 'cyh' }).unless({ path: ["/user/login", "/user/register"] });


module.exports = jwtAuth;

