import { Router } from "express";
import multer from "multer";

import authenticationCheck from "../middlewares/authenticationCheck";

import CreateUserService from "../services/CreateUserService";
import UpdateUserAvatarService from "../services/UpdateUserAvatarService";

import { HttpStatus } from "../utils/http-status";
import { STORAGE } from "../config/uploading";

const service = new CreateUserService();
const avatarService = new UpdateUserAvatarService();

const users = Router();

const upload = multer(STORAGE);

users.post("/", async (request, response) => {

    const { name, email, password } = request.body;

    const user = await service.execute({
        name,
        email,
        password
    });

    delete user.password;

    return response.json(user);
})

users.patch(
    "/avatar",
    authenticationCheck,
    upload.single("avatar"),
    async (request, response) => {

        const user = await avatarService.execute({
            user_id: request.user.id,
            filename: request.file.filename
        });

        delete user.password

        return response.json(user);
    }
)

export default users;