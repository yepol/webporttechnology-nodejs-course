import {Request, Response} from "express";
import Contact from "../../models/contact";
import { IContact } from "../../interfaces";
import { createError } from "../../helpers";

const removeById = async (req: Request, res: Response): Promise<void | never> => {
    const { id } = req.params;
    const result: IContact | null = await Contact.findByIdAndRemove(id);
    if (!result) {
        throw createError(404, "Not found");
    }
    res.status(200).json({
        message: "Contact deleted"
    });
}

export default removeById;