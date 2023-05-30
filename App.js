import AsyncStorage from '@react-native-async-storage/async-storage'
import { useState } from 'react'
import { StatusBar } from 'react-native'
import Routes from './src/routes/index'
import Introduction from './src/screens/Introduction'

/* clearAll = async () => {
  try {
    await AsyncStorage.clear()
  } catch(e) {
    // clear error
  }

  console.log('Done.')
}
clearAll() */

const storeData = async (key, value) => {
  try {
    await AsyncStorage.setItem(key, value)
  } catch (e) {
    console.log(e)
  }
}

const getData = async () => {
  try {
    const value = await AsyncStorage.getItem('@default')
    if (value === null) {
      storeData('@default', 'false')
      storeData('@darkTheme', 'false')
    }
  } catch (e) {
    console.log(e)
  }
}
getData()

export default function App() {
  const [introductionComplete, setintroductionComplete] = useState(true)

  if (introductionComplete != true) {
    return <Introduction complete={setintroductionComplete} />
  }

  return (
    <>
      <Routes />
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
    </>
  )
}
