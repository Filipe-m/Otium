import { AntDesign } from '@expo/vector-icons'
import { useState } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import Dialog from 'react-native-dialog'
import GoalsDB from '../services/models/Goals'
import DonutChart from './DonutChart'

export default function GoalsModal({
  tittle,
  dayCount,
  goal,
  id,
  forceUpdate
}) {
  const [openDialog, setOpenDialog] = useState(false)

  const isOpen = () => {
    setOpenDialog(previousState => !previousState)
  }

  const deleteGoal = () => {
    GoalsDB.remove(id)
      .then(updated => console.log('Goal removed: ' + updated))
      .catch(err => console.log(err))
  }

  const percentage = Math.round((dayCount * 100) / goal)
  return (
    <View className="relative rounded-xl mt-4  w-[90vw]">
      <View className="flex rounded-xl flex-row py-4 items-center justify-between px-6  bg-slate-500 ">
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
      <TouchableOpacity
        activeOpacity={0.5}
        className="absolute p-2 top-0 right-0"
        onPress={() => isOpen()}
      >
        <AntDesign name="close" size={24} color="black" />
      </TouchableOpacity>
      <View>
        <Dialog.Container visible={openDialog}>
          <Dialog.Title className="text-black font-bold text-xl text-center">
            Goal delete
          </Dialog.Title>
          <Dialog.Description className="text-black text-lg text-left">
            Are you sure that you want to delete this goal?
          </Dialog.Description>
          <Dialog.Description className="text-black italic font-medium text-md text-left">
            You cannot undo this action.
          </Dialog.Description>
          <Dialog.Button label="Cancel" onPress={() => isOpen()} />
          <Dialog.Button
            label="Delete"
            onPress={() => {
              deleteGoal()
              isOpen()
              forceUpdate()
            }}
          />
        </Dialog.Container>
      </View>
    </View>
  )
}
