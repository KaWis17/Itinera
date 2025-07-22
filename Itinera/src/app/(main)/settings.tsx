import { View, Text, Switch } from 'react-native';
import { useState } from 'react';
import {useAuth} from "@/src/contexts/AuthContext";

export default function Settings() {
    const { logout } = useAuth();

    const [notificationsEnabled, setNotificationsEnabled] = useState(false);
    const [darkModeEnabled, setDarkModeEnabled] = useState(false);

    return (
        <View className="flex-1 bg-gray-50 p-6">
            <Text className="text-2xl font-bold text-gray-800 mb-6">Settings</Text>

            {/* Notifications Toggle */}
            <View className="flex-row justify-between items-center mb-4">
                <Text className="text-lg text-gray-800">Enable Notifications</Text>
                <Switch
                    value={notificationsEnabled}
                    onValueChange={setNotificationsEnabled}
                />
            </View>

            {/* Dark Mode Toggle */}
            <View className="flex-row justify-between items-center mb-4">
                <Text className="text-lg text-gray-800">Enable Dark Mode</Text>
                <Switch
                    value={darkModeEnabled}
                    onValueChange={setDarkModeEnabled}
                />
            </View>

            {/* Logout Button */}
            <View className="mt-6">
                <Text
                    onPress={logout}
                    className="text-red-500 text-lg font-semibold text-center"
                >
                    Logout
                </Text>
        </View>
        </View>
    );
}