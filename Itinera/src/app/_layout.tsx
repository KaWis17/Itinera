import "@/global.css";

import { Stack } from 'expo-router';
import { AuthProvider } from '@/src/contexts/AuthContext';
import {SafeAreaView} from "react-native-safe-area-context";

export default function RootLayout() {
  return (
    <AuthProvider>
        <SafeAreaView
            className="bg-white"
            style={{ flex: 1 }}
            edges={['top', 'left', 'right']}
        >
            <Stack screenOptions={{ headerShown: false }}>
                <Stack.Screen name="(auth)" options={{ headerShown: false }} />
                <Stack.Screen name="(main)" options={{ headerShown: false }} />
            </Stack>
        </SafeAreaView>
    </AuthProvider>
  );
}
