import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import 'react-native-reanimated';
import { useColorScheme } from '@/presentation/hooks/useColorScheme';
import "../global.css"

import PermissionsCheckerProvider from '@/presentation/providers/PermissionsCheckerProvider';

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  if (!loaded) {
    // Async font loading only occurs in development.
    return null;
  }

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>

      <PermissionsCheckerProvider>

        <Stack
          screenOptions={{
            headerShown: false,
          }}
        >

          <Stack.Screen 
            name='loading/index.tsx' 
            options={{animation: 'none'}}
          />
          <Stack.Screen 
            name='map/index.tsx' 
            options={{animation: 'fade'}}
          />
          <Stack.Screen 
            name='permissions/index.tsx' 
            options={{animation: 'fade'}}
          />

        </Stack>

      </PermissionsCheckerProvider>


      <StatusBar style="auto" />
    </ThemeProvider>
  );
}
