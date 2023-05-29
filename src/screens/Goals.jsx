import { Entypo } from '@expo/vector-icons'
import { StatusBar } from 'expo-status-bar'
import { FlatList, TouchableOpacity, View } from 'react-native'
import colors from 'tailwindcss/colors'
import GoalsModal from '../components/GoalsModal'
import goals from '../data/goals.json'

const plusIconColor = colors.gray[950]

export default function Goals() {
  return (
    <View className=" items-center justify-start bg-cyan-200 flex-1">
      <View className="flex-grow, content-start items-center ">
        <FlatList
          className="w-full"
          data={goals}
          renderItem={({ item }) => (
            <GoalsModal
              tittle={item.tittle}
              dayCount={item.dayCount}
              goal={item.goal}
            />
          )}
        />
        {/*         <GoalsModal tittle={'No self-harm'} dayCount={2} goal={30} />
        <GoalsModal
          tittle={"Don't kill your friends"}
          dayCount={20}
          goal={100}
        /> */}
      </View>

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
