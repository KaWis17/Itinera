import { View, Text } from 'react-native';
import { useLocalSearchParams } from 'expo-router';

export default function IndexView() {
    const { id } = useLocalSearchParams();
    return (
        <View className="flex-1 justify-center items-center">
            <Text>Welcome to the Trip {id} Page</Text>
        </View>
    )
};