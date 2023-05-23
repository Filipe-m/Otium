import { StatusBar } from 'expo-status-bar'
import { Text, View, TouchableOpacity, Button } from 'react-native'
import GoalsModal from '../components/GoalsModal'
import { Entypo } from '@expo/vector-icons'
import colors from 'tailwindcss/colors'
const plusIconColor = colors.gray[950]

export default function Goals() {
  return (
    <View className=" items-center justify-start bg-cyan-50 flex-1">
      <GoalsModal tittle={'No self-harm'} dayCount={2} goal={30} />
      <GoalsModal tittle={'Kill your friends'} dayCount={13} goal={15} />
      <TouchableOpacity
        activeOpacity={0.7}
        className="absolute bottom-0 right-0 m-4 bg-slate-300 p-2 rounded-full"
      >
        <Entypo name="plus" size={40} color={plusIconColor} />
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  )
}
