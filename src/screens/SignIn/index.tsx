import React from "react";
import { Text } from "react-native";
import * as C from "./styles";
import brandImg from '../../assets/brand.png'
import { Input } from '../../components/Input'
import { KeyboardAvoidingView, Platform } from 'react-native'
import { Button } from "../../components/Button";
export function SignIn() {
    return (
        <C.Container>
            <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
                <C.Content>
                    <C.Brand source={brandImg}/>
                    <C.Title>Login</C.Title>
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
                    <C.ForgotPasswordButton>
                        <C.ForgotPasswordLabel>Esqueci minha senha</C.ForgotPasswordLabel>
                    </C.ForgotPasswordButton>
                    <Button title='Entrar' type="secondary" />
                </C.Content>
            </KeyboardAvoidingView>
        </C.Container>
    )
}