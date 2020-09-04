import React, { FC } from 'react';
import { FiLogIn, FiMail, FiLock } from "react-icons/fi";

import { LOGO } from '../../utils/assets';

import Input from '../../components/Input';

import { Container, Content, Background } from "./styles";
import Button from '../../components/Button';

const SignIn: FC = () => (
    <Container>
        <Content>
            <img src={LOGO} alt="GoBarber" />
            <form action="">
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
            </form>
            <a href="criar">
                <FiLogIn />
                Criar conta
            </a>
        </Content>
        <Background />
    </Container>
);

export default SignIn;
