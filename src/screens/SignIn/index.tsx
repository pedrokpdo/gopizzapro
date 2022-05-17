import React, { useState } from "react";
import { Text } from "react-native";
import * as C from "./styles";
import brandImg from '../../assets/brand.png'
import { Input } from '../../components/Input'
import { KeyboardAvoidingView, Platform } from 'react-native'
import { Button } from "../../components/Button";
import { useAuth } from "../../hooks/auth";


export function SignIn() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const { signIn, isLogging } = useAuth()

    function handleSignIn() {
        signIn(email, password)
    }

    return (
        <C.Container>
            <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
                <C.Content>
                    <C.Brand source={brandImg} />
                    <C.Title>Login</C.Title>
                    <Input
                        placeholder="E-Mail"
                        type="secondary"
                        autoCorrect={false}
                        autoCapitalize='none'
                        onChangeText={setEmail}
                    />
                    <Input
                        placeholder="Senha"
                        type="secondary"
                        secureTextEntry
                        onChangeText={setPassword}
                    />
                    <C.ForgotPasswordButton>
                        <C.ForgotPasswordLabel>Esqueci minha senha</C.ForgotPasswordLabel>
                    </C.ForgotPasswordButton>
                    <Button
                        title='Entrar'
                        type="secondary" 
                        onPress={handleSignIn}
                        isLoading={false}
                        />
                </C.Content>
            </KeyboardAvoidingView>
        </C.Container>
    )
}