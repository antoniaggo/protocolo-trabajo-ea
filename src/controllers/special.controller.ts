import {Request, Response} from 'express';
import User from "../models/user";

export const special = async (req: Request, res: Response) => {

  const results = await User.find({}, "email");
    return res.status(200).json(results);
};