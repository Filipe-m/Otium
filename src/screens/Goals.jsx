import {Entypo} from '@expo/vector-icons'
import {StatusBar} from 'expo-status-bar'
import {useEffect, useReducer, useState} from 'react'
import {FlatList, Text, TouchableOpacity, View} from 'react-native'
import Dialog from 'react-native-dialog'
import colors from 'tailwindcss/colors'
import GoalsModal from '../components/GoalsModal'
import GoalsDB from '../services/models/Goals'

const plusIconColor = colors.gray[950]

export default function Goals() {
  const [, forceUpdate] = useReducer(x => x + 1, 0)

  const [goalNumber, setGoalNumber] = useState('')
  const [tittleInput, setTittleInput] = useState('')
  const [openDialog, setOpenDialog] = useState(false)
  const [data, setData] = useState([])
  const [confirmavailable, setConfirmAvailable] = useState(true)

  useEffect(() => {
    const isANumber = Number(goalNumber)
    if (tittleInput !== '' && !Object.is(isANumber, NaN) && isANumber !== 0) {
      setConfirmAvailable(false)
    } else {
      setConfirmAvailable(true)
    }

    return () => {
      setConfirmAvailable(true)
    }
  }, [tittleInput, goalNumber])

  const fetchData = async () => {
    const goalsData = await getAllGoals()
    setData(goalsData)
  }

  useEffect(() => {
    fetchData()
  }, [])

  const resetInputs = () => {
    setGoalNumber('')
    setTittleInput('')
  }

  const createData = (tittle, goal) => {
    const currentDate = new Date()
    const createdAt = currentDate.toISOString()
    GoalsDB.create({ tittle: tittle, goal: goal, createdAt: createdAt })
      .then(id => console.log('Goal created with id: ' + id))
      .catch(err => console.log(err))
    fetchData()
  }

  const getAllGoals = async () => {
    try {
      const result = await GoalsDB.all()
      return result
    } catch (error) {
      throw error
    }
  }

  const calculateDaysPassed = isoDateString => {
    const currentDate = new Date()
    const givenDate = new Date(isoDateString)

    const timeDiff = currentDate.getTime() - givenDate.getTime()

    const daysPassed = Math.floor(timeDiff / (24 * 60 * 60 * 1000))

    return daysPassed
  }

  const isOpen = () => {
    setOpenDialog(previousState => !previousState)
  }

  function Data() {
    return (
      <View className="flex-grow, content-start items-center ">
        <FlatList
          className="w-full"
          data={data}
          renderItem={({ item }) => (
            <GoalsModal
              tittle={item.tittle}
              id={item.id}
              dayCount={calculateDaysPassed(item.createdAt)}
              forceUpdate={fetchData}
              goal={item.goal}
            />
          )}
        />
      </View>
    )
  }

  return (
    <View className=" items-center justify-start bg-cyan-200 flex-1">
      <Data />
      <View className="flex-1 items-center justify-center">
        <Dialog.Container visible={openDialog} onBackdropPress={() => isOpen()}>
          <Dialog.Title className="text-black text-2xl text-center">
            New goal
          </Dialog.Title>
          <Dialog.Description className="text-black text-lg text-center">
            Are you commited to start a new goal for your self-develpment?
          </Dialog.Description>

          <Text className="font-bold text-xl mt-4">Tittle</Text>
          <Dialog.Input
            className="text-black "
            keyboardType="default"
            theme={{ colors: { primary: 'blue' } }}
            wrapperStyle={[{ color: '#ff00ff' }]}
            value={tittleInput}
            onChangeText={text => {
              setTittleInput(text)
            }}
            codeLength={1}
          />
          <Text className="font-bold text-xl mt-4">
            Your goal <Text className="text-sm italic">(days)</Text>
          </Text>
          <Dialog.Input
            className="text-black "
            keyboardType="numeric"
            theme={{ colors: { primary: 'blue' } }}
            wrapperStyle={[{ color: '#ff00ff' }]}
            value={goalNumber}
            onChangeText={text => {
              setGoalNumber(text)
            }}
            codeLength={1}
          />

          <Dialog.Button onPress={() => isOpen()} label="Cancel" />
          <Dialog.Button
            disabled={confirmavailable}
            label="Confirm"
            onPress={() => {
              createData(tittleInput, goalNumber)
              isOpen()
            }}
          />
        </Dialog.Container>
      </View>
      <TouchableOpacity
        activeOpacity={0.7}
        onPress={() => {
          resetInputs()
          isOpen()
          getAllGoals()
        }}
        className="absolute bottom-0 right-0 m-4 bg-slate-300 p-2 rounded-full"
      >
        <Entypo name="plus" size={40} color={plusIconColor} />
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  )
}
