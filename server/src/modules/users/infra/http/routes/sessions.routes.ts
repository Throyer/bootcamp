import { Router } from 'express';
import { container } from 'tsyringe';

import AuthenticateUserService from '@modules/users/services/AuthenticateUserService';

const sessions = Router();

sessions.post('/', async (request, response) => {
    const { email, password } = request.body;

    const service = container.resolve(AuthenticateUserService);

    const { user, token } = await service.execute({
        email,
        password,
    });

    delete user.password;

    return response.json({
        user,
        token,
    });
});

export default sessions;
