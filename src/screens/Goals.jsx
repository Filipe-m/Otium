import { StatusBar } from 'expo-status-bar'
import { Text, View, TouchableOpacity } from 'react-native'

export default function Goals({ navigation }) {
  return (
    <View className=" flex-1">
      <TouchableOpacity activeOpacity={0.7} className="mb-4">
        <Text className="font-bold text-xl">Goals</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  )
}
