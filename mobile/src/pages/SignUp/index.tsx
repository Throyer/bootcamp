import React, { FC } from 'react';
import { Image, KeyboardAvoidingView, Platform, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Feather';
import { useNavigation } from '@react-navigation/native';

import Button from '../../components/Button';
import Input from '../../components/Input';

import { LOGO } from '../../utils/assets';

import {
    Container,
    Title,
    BackToSignInButton,
    BackToSignInButtonText
} from "./styles";

const SignUp: FC = () => {

    const { navigate } = useNavigation();

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
                            <Title>Crie sua conta</Title>
                        </View>

                        <Input
                            name="name"
                            icon="user"
                            placeholder="Nome"
                        />

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
                        
                        <Button onPress={() => console.log("pressionou")}>
                            Cadastrar
                        </Button>
                    </Container>
                </ScrollView>
            </KeyboardAvoidingView>

            <BackToSignInButton onPress={() => navigate('SignIn')}>
                <Icon
                    name="arrow-left"
                    size={20}
                    color="#fff"
                />
                <BackToSignInButtonText>
                    Voltar para logon
                </BackToSignInButtonText>
            </BackToSignInButton>
        </>
    );
};

export default SignUp;