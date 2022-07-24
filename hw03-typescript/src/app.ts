import express, {Express, Request, Response, NextFunction} from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import { IRequestError } from "./interfaces";
import contactsRouter from "./routes/api/contacts.js";

dotenv.config()

const {DB_HOST = '', PORT = 3000} = process.env;

const app: Express = express();

app.use(cors());
app.use(express.json());

app.use("/api/contacts", contactsRouter);

app.use((req: Request, res: Response): void => {
    res.status(404).json({
        message: "Not found"
    });
});

app.use((error: IRequestError, req: Request, res: Response, _: NextFunction): void => {
    const {status = 500, message = "Server error"} = error;
    res.status(status).json({
        message
    });
});

mongoose.connect(DB_HOST)
    .then(() => app.listen(PORT))
    .catch((error): void => {
        console.log(error.message);
        process.exit(1);
    });
