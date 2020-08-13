import {Request, Response} from 'express';
import Course from "../models/course";

export const courses = async (req: Request, res: Response) => {

    const results = await Course.find({});
    return res.status(400).json(results);

}