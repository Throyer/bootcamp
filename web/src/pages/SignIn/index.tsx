import React, { FC, useRef, useCallback } from 'react';
import { FiLogIn, FiMail, FiLock } from "react-icons/fi";

import { LOGO } from '../../utils/assets';

import { Form } from "@unform/web";
import { FormHandles } from '@unform/core';

import * as Yup from "yup";

import Input from '../../components/Input';
import Button from '../../components/Button';

import { Container, Content, Background } from "./styles";
import { getAllValidationErrors } from '../../utils/validations';

import { useSession } from "../../hooks/SessionContext";

interface SignInFormData {
    email: string;
    password: string;
}

const SignIn: FC = () => {

    const { signIn } = useSession();

    const formRef = useRef<FormHandles>(null);

    const handleSubmit = useCallback(async (data: SignInFormData): Promise<void> => {

        try {

            formRef.current?.setErrors({});

            const schema = Yup.object().shape({
                email: Yup
                    .string()
                    .required("Informe o e-mail.")
                    .email("Informe um e-mail válido."),
                password: Yup
                    .string()
                    .required("Informe a senha")
            });

            await schema.validate(data, {
                abortEarly: false
            });

            const { email, password } = data;

            signIn({
                email,
                password
            });

        } catch (error) {

            if (error instanceof Yup.ValidationError) {
                const errors = getAllValidationErrors(error);
                formRef.current?.setErrors(errors);
            }

            
        }

    }, [signIn]);

    return (
        <Container>
            <Content>
                <img src={LOGO} alt="GoBarber" />
                <Form ref={formRef} onSubmit={handleSubmit}>
                    <h1>Faça seu logon</h1>

                    <Input
                        icon={FiMail}
                        name="email"
                        placeholder="E-mail"
                    />

                    <Input
                        icon={FiLock}
                        name="password"
                        type="password"
                        placeholder="Password"
                    />

                    <Button type="submit">
                        Entrar
                    </Button>

                    <a href="forgot">
                        Esqueci minha senha
                    </a>
                </Form>
                <a href="criar">
                    <FiLogIn />
                    Criar conta
                </a>
            </Content>
            <Background />
        </Container>
    );
};

export default SignIn;
