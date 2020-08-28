import { getRepository } from "typeorm";
import User from "../models/User";
import { hash } from "bcryptjs";
import HttpStatusError from "../errors/HttpStatusError";
import { HttpStatus } from "../utils/http-status";

interface UserForm {
    name: string;
    email: string;
    password: string;
}

class CreateUserService {

    public async execute({ name, email, password }: UserForm): Promise<User> {

        const repository = getRepository(User);
        const exists = await repository.findOne({
            where: { email }
        });

        if (exists) {
            throw new HttpStatusError("Email já utilizado.", HttpStatus.BAD_REQUEST);
        }

        const user = await repository.save({
            name,
            email,
            password: await hash(password, 8)
        });

        return user;
    }
}

export default CreateUserService;