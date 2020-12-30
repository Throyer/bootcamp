import fs from 'fs';
import path from 'path';
import { getRepository } from 'typeorm';
import { DIRECTORY } from '../../../config/uploading';
import HttpStatusError from '../../../shared/errors/HttpStatusError';
import { HttpStatus } from '../../../utils/http-status';
import User from '../entities/User';

interface AvatarFrom {
    user_id: string;
    filename: string;
}

class UpdateUserAvatarService {
    public async execute({ user_id, filename }: AvatarFrom): Promise<User> {
        const repository = getRepository(User);

        const user = await repository.findOne({ where: { id: user_id } });

        if (!user) {
            throw new HttpStatusError(
                'Usuario não autorizado a trocar de avatar.',
                HttpStatus.FORBIDDEN,
            );
        }

        if (user.avatar) {
            const file = path.join(DIRECTORY, user.avatar);
            const exists = await fs.promises.stat(file);

            if (exists) {
                await fs.promises.unlink(file);
            }
        }

        user.avatar = filename;

        await repository.save(user);

        return user;
    }
}

export default UpdateUserAvatarService;
