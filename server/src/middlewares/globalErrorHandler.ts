import { Request, Response, NextFunction } from "express";
import HttpStatusError from "../errors/HttpStatusError";
import { HttpStatus } from "../utils/http-status";

export default function globalErrorHandler(error: Error, request: Request, respose: Response, next: NextFunction) {

    if (error instanceof HttpStatusError) {
        return respose
            .status(error.status)
            .json({
                message: error.message,
                staus: error.status
            });
    }

    console.error(error);

    return respose
        .status(HttpStatus.INTERNAL_SERVER_ERROR)
        .json({
            message: "Internal server error",
            staus: HttpStatus.INTERNAL_SERVER_ERROR
        })
}
