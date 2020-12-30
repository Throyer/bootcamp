import { Router } from 'express';
import AuthenticateUserService from '../../modules/users/services/AuthenticateUserService';

const service = new AuthenticateUserService();

const sessions = Router();

sessions.post('/', async (request, response) => {
    const { email, password } = request.body;

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
