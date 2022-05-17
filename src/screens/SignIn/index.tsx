import React from "react";
import { Text } from "react-native";
import { Container } from "./styles";
import { Input } from '../../components/Input'
import { Button } from "../../components/Button";
export function SignIn() {
    return (
        <Container>
            <Input
                placeholder="E-Mail"
                type="secondary"
                autoCorrect={false}
                autoCapitalize='none'
            />
            <Input
                placeholder="Senha"
                type="secondary"
                secureTextEntry
            />
            <Button title='Entrar' type="secondary"/>
        </Container>
    )
}