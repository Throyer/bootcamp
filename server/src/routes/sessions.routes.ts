import { Router } from "express";

import { HttpStatus } from "../utils/http-status";

import AuthenticateUserService from "../services/AuthenticateUserService";

const service = new AuthenticateUserService();

const sessions = Router();

sessions.post("/", async (request, response) => {

    const { email, password } = request.body;

    const { user, token } = await service.execute({
        email,
        password
    });

    delete user.password;

    return response.json({
        user,
        token
    });
})

export default sessions;