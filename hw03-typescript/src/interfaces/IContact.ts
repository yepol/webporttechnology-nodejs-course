import { Document } from "mongoose";

export interface IContact extends Document {
    _id: number
    name?: string
    email: string
    phone: string
    favorite?: boolean
}