import { Request, Response } from 'express';
import User, { IUser } from "../models/user";
import jwt from "jsonwebtoken";
import config from "../config/config";

function createToken(user: IUser) {
    return jwt.sign({ id: user.id, email: user.email }, config.jwtSecret, {
        expiresIn: 86400
    });
}


export const signIn = async (req: Request, res: Response) => {
    if (!req.body.email || !req.body.password) {
        return res
            .status(400)
            .json({ msg: "Please. Envia tu email y password" });
    }

    const user = await User.findOne({ email: req.body.email, password: req.body.password });
    if (!user) {
        return res.status(400).json({ msg: "El email o el password son incorrectos" });
    }

    return res.status(200).json({ token: createToken(user) });

}