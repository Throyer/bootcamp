import { Platform } from "react-native";
import styled from "styled-components/native";

import { ROBOTO_SLAB_MEDIUM, ROBOTO_SLAB_REGULAR } from "../../utils/fonts";

export const Container = styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;
    padding: 0 30px ${Platform.OS === "android" ? 120 : 40}px;
`;

export const Title = styled.Text`
    font-size: 24px;
    color: #f4ede8;
    font-family: '${ROBOTO_SLAB_MEDIUM}';
    margin: 64px 0 24px;
`;

export const ForgotPassword = styled.TouchableOpacity`
    margin-top: 24px;
`;

export const ForgotPasswordText = styled.Text`
    color: #f4ede8;
    font-size: 16px;
    font-family: '${ROBOTO_SLAB_REGULAR}';
`;

export const CreateAccountButton = styled.TouchableOpacity`
    position: absolute;
    left: 0;
    bottom: 0;
    right: 0;

    background: #312e38;
    border-top-width: 1px;
    border-color: #232129;
    padding: 16px 0 16px;

    justify-content: center;
    align-items: center;
    flex-direction: row;
`;

export const CreateAccountButtonText = styled.Text`
    color: #FF9000;
    font-size: 18px;
    font-family: '${ROBOTO_SLAB_REGULAR}';
    margin-left: 16px;
`;
