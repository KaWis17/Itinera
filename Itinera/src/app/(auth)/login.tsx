import { View, Text, Button, TextInput, TouchableOpacity } from 'react-native';
import { Link } from 'expo-router';
import { useAuth } from '@/src/contexts/AuthContext';
import { useState } from 'react';

export default function LoginScreen() {
  const { login } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View className="flex-1 justify-center items-center bg-white px-8">
      <Text className="text-3xl font-bold mb-8 text-gray-800">Welcome Back</Text>
      
      <View className="w-full max-w-sm">
        <TextInput
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          className="border border-gray-300 rounded-lg px-4 py-3 mb-4 text-base"
          keyboardType="email-address"
          autoCapitalize="none"
        />
        
        <TextInput
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          className="border border-gray-300 rounded-lg px-4 py-3 mb-6 text-base"
          secureTextEntry
        />
        
        <TouchableOpacity
          onPress={() => login({ name: 'Alice', email })}
          className="bg-blue-600 rounded-lg py-3 mb-4"
        >
          <Text className="text-white text-center text-lg font-semibold">Login</Text>
        </TouchableOpacity>
        
        <View className="flex-row justify-center">
          <Text className="text-gray-600">Don't have an account? </Text>
          <Link href="/(auth)/register" className="text-blue-600 font-semibold">
            Sign up
          </Link>
        </View>
      </View>
    </View>
  );
}