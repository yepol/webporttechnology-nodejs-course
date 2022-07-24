import mongoose from "mongoose";
import {Request, Response, NextFunction} from "express";

import { createError } from "../helpers";

const {isValidObjectId} = mongoose;

const isValidId = (req: Request, res: Response, next: NextFunction): void | never => {
    const {id} = req.params;
    if(!isValidObjectId(id)) {
        return next(createError(400, `${id} is not valid id format`))
    }
    next();
}

export default isValidId;