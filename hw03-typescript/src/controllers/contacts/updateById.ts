import {Request, Response} from "express";
import Contact from "../../models/contact";
import { IContact } from "../../interfaces";
import { createError } from "../../helpers";

const updateById = async (req: Request, res: Response): Promise<void | never> => {
    const { id, field } = req.params;
    if (field && (req.body[field] === undefined || !Contact.schema.paths[field])) {
        throw createError(400, `Missing field ${field}`);
    }
    const result: IContact | null = await Contact.findByIdAndUpdate(id, req.body, {new: true, runValidators: true});
    if (!result) {
        throw createError(404, "Not found");
    }
    res.json(result);
}

export default updateById;