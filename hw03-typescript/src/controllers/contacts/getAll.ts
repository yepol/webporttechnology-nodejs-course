import {Request, Response} from "express";
import Contact from "../../models/contact";
import { IContact } from "../../interfaces";

const getAll = async (req: Request, res: Response): Promise<void> => {
    const result: Array<IContact> = await Contact.find({});
    res.json(result);
}

export default getAll;