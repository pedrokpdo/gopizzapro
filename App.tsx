import React from 'react';
import { useFonts, DMSerifDisplay_400Regular } from '@expo-google-fonts/dm-serif-display';
import { ThemeProvider } from 'styled-components/native'
import theme from './src/theme'
import { SignIn } from './src/screens/SignIn';

export default function App() {
  const [fontsLoading] = useFonts({
    DMSerifDisplay_400Regular,
  })

  return (
    <ThemeProvider theme={theme}>
      <SignIn />
    </ThemeProvider>

  );
}
