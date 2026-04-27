import { DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import 'react-native-reanimated';

export default function RootLayout() {
  return (
    <ThemeProvider value={DefaultTheme}>
      <Stack screenOptions={{ headerShown: false }}>
        
        {/* APP PRINCIPAL */}
        <Stack.Screen name="(tabs)" />

        {/* AUTH */}
        <Stack.Screen name="auth/login" />
        <Stack.Screen name="auth/cadastro" />
        <Stack.Screen name="auth/esqueceu-senha" />

      </Stack>

      <StatusBar style="auto" />
    </ThemeProvider>
  );
}