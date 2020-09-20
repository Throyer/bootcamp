import styled from "styled-components/native";

import { ROBOTO_SLAB_MEDIUM } from "../../utils/fonts";

export const Container = styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;
    padding: 0 30px;
`;

export const Title = styled.Text`
    font-size: 24px;
    color: #f4ede8;
    font-family: '${ROBOTO_SLAB_MEDIUM}';
    margin: 64px 0 24px;
`;
