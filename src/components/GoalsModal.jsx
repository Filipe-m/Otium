import { Text, View } from 'react-native'
import DonutChart from './DonutChart'

export default function GoalsModal({ tittle, dayCount, goal }) {
  const percentage = Math.round((dayCount * 100) / goal)
  return (
    <View className="flex rounded-xl mt-4  w-[80vw] flex-grow flex-row p-4 items-center justify-between px-6  bg-slate-500 ">
      <View>
        <Text className="text-2xl  font-semibold">{tittle}</Text>
        <Text className="text-xl italic">
          {dayCount}/{goal} days
        </Text>
      </View>
      <View className="p-3">
        <DonutChart radius={45} percentage={percentage} />
      </View>
    </View>
  )
}
