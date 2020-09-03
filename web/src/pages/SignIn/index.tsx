import React, { FC } from 'react';
import { FiLogIn } from "react-icons/fi";

import { Container, Content, Background } from "./styles";
import { LOGO } from '../../utils/assets';

const SignIn: FC = () => (
    <Container>
        <Content>
            <img src={LOGO} alt="GoBarber" />
            <form action="">
                <h1>Faça seu logon</h1>

                <input placeholder="E-mail" />
                <input type="password" placeholder="Password" />
                <button type="submit">Entrar</button>

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
