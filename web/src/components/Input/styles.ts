import styled, { css } from "styled-components";

interface ContainerProps {
    isFocused?: boolean;
    notEmpty?: boolean;
}

export const Container = styled.div<ContainerProps>`

    background: #232129;
    border-radius: 10px;
    border: 2px solid #232129;
    padding: 16px;
    width: 100%;
    color: #666360;

    display: flex;
    align-items: center;

    & + div {
        margin-top: 8px;
    }

    ${({ isFocused }) => isFocused && css`
        color: #ff9000;
        border-color: #ff9000;
    `}

    ${({ notEmpty }) => !!notEmpty && css`
        color: #ff9000;
    `}

    input {

        flex: 1;
        background: transparent;
        border: 0;
        color: #F4ede8;

        &::placeholder {
            color: #666360;
        }

        & + input {
            margin-top: 8px;
        } 
    }

    svg {
        margin-right: 16px;
    }
`;