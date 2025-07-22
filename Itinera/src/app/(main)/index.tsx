import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

const items = ['Malaga', 'Split', 'Liberec'];

export default function Home(){
  const router = useRouter();

  return (
    <View className="flex-1 bg-gray-50">
      <View className="flex-row justify-between items-center pt-12 pb-6 px-6 bg-white shadow-sm">
        <Text className="text-2xl font-bold text-gray-800">My Trips</Text>
        <TouchableOpacity
          onPress={() => router.navigate(`/(main)/settings`)}
          className="bg-red-500 rounded-full p-3"
        >
          <Ionicons name="log-out-outline" size={20} color="white" />
        </TouchableOpacity>
      </View>

      {/* Trip panels */}
      <ScrollView className="flex-1 px-6 pt-4">
        {items.map(id => (
          <TouchableOpacity
            key={id}
            onPress={() => router.navigate(`/(main)/trips/${id}`)}
            className="bg-white rounded-xl p-6 mb-4 shadow-sm border border-gray-100"
          >
            <Text className="text-xl font-semibold text-gray-800 mb-2">{id}</Text>
            <Text className="text-gray-500">Tap to view trip details</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
}