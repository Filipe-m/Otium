import { useEffect, useState } from 'react'
import { Switch } from 'react-native'
import colors from 'tailwindcss/colors'
const thumActiveColor = colors.amber[400]
const thumbInactiveColor = colors.slate[400]
const backgroundActiveButtonColor = colors.cyan[950]
const backgroundInactiveButtonColor = colors.slate[950]

export default function SwitchComponent({ id }) {
 
  const [isEnabled, setIsEnabled] = useState(false)

  if (isEnabled !== null) {
    return (
      <Switch
        trackColor={{
          false: backgroundInactiveButtonColor,
          true: backgroundActiveButtonColor
        }}
        thumbColor={isEnabled ? thumActiveColor : thumbInactiveColor}
        ios_backgroundColor={backgroundInactiveButtonColor}
        value={isEnabled}
      />
    )
  } else {
    return <></>
  }
}
