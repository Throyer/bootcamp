import React, { FC } from 'react';
import { Image } from 'react-native';

import Button from '../../components/Button';
import Input from '../../components/Input';

import { LOGO } from '../../utils/assets';

import { Container, Title } from "./styles";

const SignIn: FC = () => {

    return (
        <Container>
            <Image source={LOGO} />

            <Title>Faça seu logon</Title>

            <Input
                name="email"
                icon="mail"
                placeholder="E-mail"
            />
            
            <Input
                name="password"
                icon="lock"
                placeholder="Senha"
            />
            
            <Button onPress={() => console.log("pressionou")}>Entrar</Button>
        </Container>
    );
};

export default SignIn;