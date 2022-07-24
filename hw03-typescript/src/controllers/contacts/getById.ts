import {Request, Response} from "express";
import Contact from "../../models/contact";
import { IContact } from "../../interfaces";
import { createError } from "../../helpers";

const getById = async (req: Request, res: Response) => {
    const { id } = req.params;
    const result: IContact | null = await Contact.findById(id);
    if (!result) {
        throw createError(404, "Not found")
    }
    res.json(result);
}

export default getById;