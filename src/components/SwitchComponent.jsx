import AsyncStorage from '@react-native-async-storage/async-storage'
import { useEffect, useState } from 'react'
import { Switch } from 'react-native'
import colors from 'tailwindcss/colors'
const thumActiveColor = colors.amber[400]
const thumbInactiveColor = colors.slate[400]
const backgroundActiveButtonColor = colors.cyan[950]
const backgroundInactiveButtonColor = colors.slate[950]

export default function SwitchComponent({ id }) {
  useEffect(() => {
    const getData = async key => {
      try {
        const value = await AsyncStorage.getItem(key)
        if (value !== null) {
          if (value == 'true') {
            setIsEnabled(true)
          } else if (value == 'false') {
            setIsEnabled(false)
          }
        }
      } catch (e) {
        console.log(e)
      }
    }
    getData(id)
  }, [])

  setData = async state => {
    try {
      await AsyncStorage.setItem(id, state)
    } catch (e) {
      console.log(e)
    }
  }

  const [isEnabled, setIsEnabled] = useState(null)
  const toggleSwitch = () => {
    setIsEnabled(previousState => !previousState)
    setData(`${!isEnabled}`)
  }

  if (isEnabled !== null) {
    return (
      <Switch
        trackColor={{
          false: backgroundInactiveButtonColor,
          true: backgroundActiveButtonColor
        }}
        thumbColor={isEnabled ? thumActiveColor : thumbInactiveColor}
        ios_backgroundColor={backgroundInactiveButtonColor}
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
    )
  } else {
    return <></>
  }
}
