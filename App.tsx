import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { useFonts, DMSerifDisplay_400Regular } from '@expo-google-fonts/dm-serif-display';
import { ThemeProvider } from 'styled-components/native'
import theme from './src/theme'
import { SignIn } from './src/screens/SignIn';
import { DMSans_400Regular } from '@expo-google-fonts/dm-sans';

export default function App() {
  const [fontsLoading] = useFonts({
    DMSerifDisplay_400Regular,
    DMSans_400Regular
  })

  return (
    <ThemeProvider theme={theme}>
      <StatusBar style='light' translucent backgroundColor='transparent'/>
      <SignIn />
    </ThemeProvider>

  );
}
