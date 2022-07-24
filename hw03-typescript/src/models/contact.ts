import mongoose from "mongoose";
import { IContact } from "../interfaces";
import { IRequestError } from "../interfaces";

const {Schema, model} = mongoose;

const contactSchema = new Schema<IContact>({
    name: {
        type: String,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    phone: {
        type: String,
        match: /\+380\d{9}/,
        required: true,
        unique: true,
    },
    favorite: {
        type: Boolean,
        required: false,
        default: false,
    }
}, {versionKey: false});

const handleErrors = (error: IRequestError, data: Document, next: ()=> void)=> {
    const {name, code} = error;
    if(name === "MongoServerError" && code === 11000) {
        error.status = 409;
    }
    else {
        error.status = 400;
    }
    next()
}
contactSchema.post("save", handleErrors);
const Contact = model("contact", contactSchema);

export default Contact;