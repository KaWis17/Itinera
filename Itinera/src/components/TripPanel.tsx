import { TouchableOpacity, Text, Image, View } from 'react-native';

type TripPanelProps = {
    id: string;
    title: string;
    startDate?: string;
    endDate?: string;
    destination?: string;
    image?: string;
    onPress: () => void;
};

export function TripPanel({ title, destination, startDate, endDate, image, onPress }: TripPanelProps) {
    return (
        <TouchableOpacity
            onPress={onPress}
            activeOpacity={1}
            className="bg-white rounded-2xl mb-4 shadow-lg border border-neutral-100 overflow-hidden"
        >
            {image && (
                <Image
                    className="w-full h-40 rounded-t-2xl"
                    source={{ uri: image }}
                    resizeMode="cover"
                />
            )}
            <View className="p-4">
                <Text className="text-xl font-bold text-neutral-800 mb-1.5">{title}</Text>
                {destination && (
                    <Text className="text-base text-neutral-600 mb-1">Destination: {destination}</Text>
                )}
                {(startDate || endDate) && (
                    <Text className="text-sm text-neutral-500">
                        {startDate ? startDate : ''}{startDate && endDate ? ' - ' : ''}{endDate ? endDate : ''}
                    </Text>
                )}
            </View>
        </TouchableOpacity>
    );
}