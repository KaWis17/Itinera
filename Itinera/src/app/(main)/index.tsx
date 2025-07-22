import {View, Text, TouchableOpacity, ScrollView} from 'react-native';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import {TripPanel} from "@/src/components/TripPanel";

const items = ['Malaga', 'Split', 'Liberec'];

export default function Home(){
  const router = useRouter();

  return (
    <View className="flex-1 bg-gray-50">
      <View className="flex-row justify-between items-center pb-4 px-6 bg-white shadow-sm">
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
              <TripPanel
                  key={id}
                  id={id}
                  title={id}
                  destination={id}
                    startDate="2023-10-01"
                    endDate="2023-10-10"
                    image={``}
                  onPress={() => router.navigate(`/(main)/trips/${id}`)}
              />
          ))}
      </ScrollView>
    </View>
  );
}