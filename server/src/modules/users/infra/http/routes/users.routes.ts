import { Router } from 'express';
import multer from 'multer';
import { container } from 'tsyringe';

import { STORAGE } from '@config/uploading';

import CreateUserService from '@modules/users/services/CreateUserService';
import UpdateUserAvatarService from '@modules/users/services/UpdateUserAvatarService';

import authenticationCheck from '@modules/users/infra/http/middlewares/authenticationCheck';

const users = Router();

const upload = multer(STORAGE);

users.post('/', async (request, response) => {
    const { name, email, password } = request.body;

    const service = container.resolve(CreateUserService);

    const user = await service.execute({
        name,
        email,
        password,
    });

    delete user.password;

    return response.json(user);
});

users.patch(
    '/avatar',
    authenticationCheck,
    upload.single('avatar'),
    async (request, response) => {

        const service = container.resolve(UpdateUserAvatarService);

        const user = await service.execute({
            user_id: request.user.id,
            filename: request.file.filename,
        });

        delete user.password;

        return response.json(user);
    },
);

export default users;
