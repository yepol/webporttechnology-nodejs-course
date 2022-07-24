import { IRequestError } from "../interfaces";

type ErrorMessages = {
    [key:number]: string;
}

const messages: ErrorMessages = {
    400: "Bad Request",
    401: "Unauthorized",
    403: "Forbidden",
    404: "Not found",
    409: "Conflict"
}

const createError = (status: number, message: string = messages[status]): IRequestError => {
    const error: IRequestError = new Error(message);
    error.status = status;
    return error;
}

export default createError;