import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { Link } from 'expo-router';
import { useAuth } from '../../contexts/AuthContext';
import { useState } from 'react';

export default function RegisterScreen() {
  const { login } = useAuth(); // simulate account creation
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  return (
    <View className="flex-1 justify-center items-center bg-white px-8">
      <Text className="text-3xl font-bold mb-8 text-gray-800">Create Account</Text>
      
      <View className="w-full max-w-sm">
        <TextInput
          placeholder="Full Name"
          value={name}
          onChangeText={setName}
          className="border border-gray-300 rounded-lg px-4 py-3 mb-4 text-base"
          autoCapitalize="words"
        />
        
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
          className="border border-gray-300 rounded-lg px-4 py-3 mb-4 text-base"
          secureTextEntry
        />
        
        <TextInput
          placeholder="Confirm Password"
          value={confirmPassword}
          onChangeText={setConfirmPassword}
          className="border border-gray-300 rounded-lg px-4 py-3 mb-6 text-base"
          secureTextEntry
        />
        
        <TouchableOpacity
          onPress={() => login({ name, email })}
          className="bg-green-600 rounded-lg py-3 mb-4"
        >
          <Text className="text-white text-center text-lg font-semibold">Create Account</Text>
        </TouchableOpacity>
        
        <View className="flex-row justify-center">
          <Text className="text-gray-600">Already have an account? </Text>
          <Link href="/(auth)/login" className="text-blue-600 font-semibold">
            Sign in
          </Link>
        </View>
      </View>
    </View>
  );
}