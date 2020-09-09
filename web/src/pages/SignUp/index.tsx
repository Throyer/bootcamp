import React, { FC, useCallback, useRef } from 'react';
import { FiMail, FiLock, FiUser, FiArrowLeft } from "react-icons/fi";
import { Link } from "react-router-dom";

import { Form } from "@unform/web";
import { FormHandles } from '@unform/core';

import * as Yup from "yup";

import { LOGO } from '../../utils/assets';

import Input from '../../components/Input';
import Button from '../../components/Button';

import { getAllValidationErrors } from '../../utils/validations';

import { Container, Content, Background } from "./styles";

const SignUp: FC = () => {

    const formRef = useRef<FormHandles>(null);

    const handleSubmit = useCallback(async (data: object): Promise<void> => {

        try {

            formRef.current?.setErrors({});

            const schema = Yup.object().shape({
                name: Yup
                    .string()
                    .required("Informe o nome."),
                email: Yup
                    .string()
                    .required("Informe o e-mail.")
                    .email("Informe um e-mail válido."),
                password: Yup
                    .string()
                    .min(6, "Minimo 6 dígitos")
            });

            await schema.validate(data, {
                abortEarly: false
            });

        } catch (error) {
            const errors = getAllValidationErrors(error);
            formRef.current?.setErrors(errors);
        }
    }, []);

    return (
        <Container>
            <Background />
            <Content>
                <img src={LOGO} alt="GoBarber" />
                <Form ref={formRef} onSubmit={handleSubmit}>
                    <h1>Faça seu cadastro</h1>

                    <Input
                        icon={FiUser}
                        name="name"
                        placeholder="Nome"
                    />

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
                        Cadastrar
                    </Button>

                </Form>
                <Link to="/">
                    <FiArrowLeft />
                    Voltar para logon
                </Link>
            </Content>
        </Container>
    )
};

export default SignUp;
