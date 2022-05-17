import React from "react";
import { RectButtonProps } from 'react-native-gesture-handler'

import { Container, Title, Load } from "./styles";


export function Button({
    title,
    type = 'primary', 
    isLoading = false, 
    ...rest 
}) {
    return (
        <Container type={type} enabled={!isLoading} {...rest}>
            {isLoading ? <Load /> : <Title>{title}</Title>}
        </Container>
    )
}