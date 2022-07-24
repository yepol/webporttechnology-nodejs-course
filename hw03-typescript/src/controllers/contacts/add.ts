import {Request, Response} from "express";
import Contact from "../../models/contact";
import { IContact } from "../../interfaces";

const add = async (req: Request, res: Response): Promise<void | never> => {
    const result: IContact = await Contact.create(req.body);
    res.status(201).json(result)
}

export default add;