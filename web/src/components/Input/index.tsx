import React, { FC, InputHTMLAttributes, ComponentType, useEffect, useRef, useState, useCallback } from "react";
import { useField } from "@unform/core";

import { Container } from "./styles";
import { IconBaseProps } from "react-icons";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    name: string;
    icon?: ComponentType<IconBaseProps>;
}

const Input: FC<InputProps> = ({ name, icon: Icon, ...props }) => {

    const inputRef = useRef<HTMLInputElement>(null);

    const [isFocused, setFocused] = useState(false);
    const [notEmpty, setEmpty] = useState(false);

    const { fieldName, defaultValue, error, registerField } = useField(name);

    const handleInputFocus = useCallback(() =>
        setFocused(true), []);

    const handleInputBlur = useCallback(() => {
        setFocused(false);
        setEmpty(!!inputRef.current?.value);
    }, []);

    useEffect(() => {
        registerField({
            name: fieldName,
            ref: inputRef.current,
            path: "value"
        });
    }, [fieldName, registerField]);

    return (
        <Container notEmpty={notEmpty} isFocused={isFocused}>
            {Icon && (
                <Icon size={20} />
            )}
            <input
                onFocus={handleInputFocus}
                onBlur={handleInputBlur}
                defaultValue={defaultValue}
                ref={inputRef}
                type="text"
                {...props}
            />
        </Container>
    )
}

export default Input;