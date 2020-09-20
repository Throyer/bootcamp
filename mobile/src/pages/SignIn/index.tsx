import React, { FC, useCallback, useRef } from 'react';
import { Image, KeyboardAvoidingView, Platform, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Feather';
import { useNavigation } from '@react-navigation/native';

import Button from '../../components/Button';
import Input from '../../components/Input';

import { LOGO } from '../../utils/assets';

import { Form } from '@unform/mobile';
import { FormHandles } from '@unform/core';

import {
    Container,
    Title,
    ForgotPassword,
    ForgotPasswordText,
    CreateAccountButton,
    CreateAccountButtonText
} from "./styles";

const SignIn: FC = () => {

    const formRef = useRef<FormHandles>(null);
    const { navigate } = useNavigation();

    const handleSignIn = useCallback(async (data: object) => {
        console.log(data);        
    }, []);

    return (
        <>
            <KeyboardAvoidingView
                behavior={Platform.OS === "ios" ? 'padding' : undefined}
                style={{ flex: 1 }}
                enabled
            >
                <ScrollView
                    keyboardShouldPersistTaps="handled"
                    contentContainerStyle={{ flex: 1 }}
                >
                    <Container>
                        <Image source={LOGO} />

                        <View>
                            <Title>Faça seu logon</Title>
                        </View>

                        <Form ref={formRef} onSubmit={handleSignIn}>
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

                        </Form>

                        <Button onPress={() => {
                            formRef.current?.submitForm();
                        }}>
                            Entrar
                        </Button>
                        

                        <ForgotPassword onPress={() => console.log("pressionou")}>
                            <ForgotPasswordText>
                                Esqueci minha senha
                            </ForgotPasswordText>
                        </ForgotPassword>
                    </Container>
                </ScrollView>
            </KeyboardAvoidingView>

            <CreateAccountButton onPress={() => navigate('SignUp')}>
                <Icon
                    name="log-in"
                    size={20}
                    color="#ff9000"
                />
                <CreateAccountButtonText>
                    Criar um conta
                </CreateAccountButtonText>
            </CreateAccountButton>
        </>
    );
};

export default SignIn;