import { Redirect, Stack } from 'expo-router';
import { useAuth } from '../../contexts/AuthContext';

export default function AuthLayout() {
  const { user, loading } = useAuth();

  if (loading) return null;
  if (user) return <Redirect href="/(main)" />;

    return <Stack 
        screenOptions={{ 
            headerShown: false, 
            gestureEnabled: false
        }} 
    />;
}
