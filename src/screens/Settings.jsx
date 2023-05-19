import { StatusBar } from 'expo-status-bar'
import { Text, View, TouchableOpacity } from 'react-native'
import NavBar from '../components/NavBar'

export default function Settings({ navigation }) {
  return (
    <View className=" flex-1">
      <TouchableOpacity activeOpacity={0.7} className="mb-4">
        <Text className="font-bold text-xl">Settings</Text>
      </TouchableOpacity>
      <NavBar currentTab="settings" navigation={navigation} />
      <StatusBar style="auto" />
    </View>
  )
}
