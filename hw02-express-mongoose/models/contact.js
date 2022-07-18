import mongoose from "mongoose";

const {Schema, model} = mongoose;

const contactSchema = Schema({
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

const handleErrors = (error, data, next)=> {
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