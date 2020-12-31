import { getRepository } from 'typeorm';
import { compare } from 'bcryptjs';
import { sign } from 'jsonwebtoken';

import { JWT } from '@config/authentication';
import HttpStatusError from '@shared/errors/HttpStatusError';
import { HttpStatus } from '@utils/http-status';

import User from '@modules/users/infra/typeorm/entities/User';

interface SessionForm {
    email: string;
    password: string;
}

interface SessionDTO {
    user: User;
    token: string;
}

class AuthenticateUserService {
    public async execute({
        email,
        password,
    }: SessionForm): Promise<SessionDTO> {
        const repository = getRepository(User);
        const user = await repository.findOne({ where: { email } });

        if (!user) {
            throw new HttpStatusError(
                'Email ou senha incorreto.',
                HttpStatus.UNAUTHORIZED,
            );
        }

        const match = await compare(password, user.password);

        if (!match) {
            throw new HttpStatusError(
                'Email ou senha incorreto.',
                HttpStatus.UNAUTHORIZED,
            );
        }

        const token = sign({ roles: ['USER'] }, JWT.SECRET, {
            subject: user.id,
            expiresIn: JWT.EXPIRATION_TIME,
        });

        return {
            user,
            token,
        };
    }
}

export default AuthenticateUserService;
