import React, { FC } from 'react';
import { FiMail, FiLock, FiUser, FiArrowLeft } from "react-icons/fi";
import { Form } from "@unform/web";

import { LOGO } from '../../utils/assets';

import Input from '../../components/Input';
import Button from '../../components/Button';

import { Container, Content, Background } from "./styles";

const SignUp: FC = () => {

    function handleSubmit(data: object): void {
        console.log(data);
        
    }

    return (
        <Container>
            <Background />
            <Content>
                <img src={LOGO} alt="GoBarber" />
                <Form onSubmit={handleSubmit}>
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
                <a href="criar">
                    <FiArrowLeft />
                    Voltar para logon
                </a>
            </Content>
        </Container>
    )
};

export default SignUp;
