import { View, Text } from 'react-native'

export default function GoalsModal({ tittle, dayCount, goal }) {
  return (
    <View className="flex rounded-xl mt-4  w-[80%]  flex-row p-4 items-center justify-center  bg-slate-500 ">
      <View className="p-3">
        <View className="w-12 bg-blue-700 h-12"></View>
      </View>
      <View>
        <Text className="text-2xl">{tittle}</Text>
        <Text>
          {dayCount}/{goal} days
        </Text>
      </View>
    </View>
  )
}
