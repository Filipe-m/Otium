import { StatusBar } from 'expo-status-bar'
import { Text, View, TouchableOpacity } from 'react-native'

export default function Home({ navigation }) {
  return (
    <View className="flex-1 items-center justify-center bg-slate-600">
      <TouchableOpacity activeOpacity={0.7} className="mb-4">
        <Text className="font-bold text-xl">Home</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  )
}
