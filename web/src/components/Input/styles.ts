import styled, { css } from "styled-components";
import Tooltip from "../Tooltip";

interface ContainerProps {
    isFocused?: boolean;
    notEmpty?: boolean;
    hasError?: boolean;
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

    ${({ hasError }) => !!hasError && css`
        border-color: #c53030;
    `}

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

export const FormError = styled(Tooltip)`
    height: 20px;
    margin-left: 16px;

    svg {
        margin: 0;
    }

    span {
        background: #C53030;
        color: #FFF;

        &::before {
            border-color: #C53030 transparent;
        }
    }
`;