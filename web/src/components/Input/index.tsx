import React, { FC, InputHTMLAttributes, ComponentType } from "react";

import { Container } from "./styles";
import { IconBaseProps } from "react-icons";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    name: string;
    icon?: ComponentType<IconBaseProps>;
}

const Input: FC<InputProps> = ({ icon: Icon, ...props }) => {

    return (
        <Container>
            {Icon && (
                <Icon size={20} />
            )}
            <input type="text" {...props} />
        </Container>
    )
}

export default Input;