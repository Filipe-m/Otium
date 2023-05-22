import { View, TouchableOpacity } from 'react-native'
import colors from 'tailwindcss/colors'
import { FontAwesome5 } from '@expo/vector-icons'
import { Feather } from '@expo/vector-icons'
import { Entypo } from '@expo/vector-icons'
import { Ionicons } from '@expo/vector-icons'

export default function NavBar({ currentTab, navigation }) {
  const iconSize = 34
  const iconsStyle = 'flex-auto w-full h-full items-center justify-end  '
  const iconsColor = 'white'
  const selectedIconSize = 40
  const selectedIconStyle =
    'flex-auto w-full h-full items-center justify-end rounded-full p-1 '
  const selectedIconColor = colors.amber[400]
  return (
    <View className="absolute max-h-16 m-auto left-0 right-0 pb-4 mt-16  bg-cyan-950  bottom-0 border-t-2 ">
      <View className="flex flex-row justify-evenly items-center  ">
        <TouchableOpacity
          activeOpacity={0.7}
          className={currentTab === 'journal' ? selectedIconStyle : iconsStyle}
          onPress={() => navigation.navigate('Journal')}
        >
          <FontAwesome5
            name="journal-whills"
            size={currentTab === 'journal' ? selectedIconSize : iconSize}
            color={currentTab === 'journal' ? selectedIconColor : iconsColor}
          />
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.7}
          className={currentTab === 'goals' ? selectedIconStyle : iconsStyle}
          onPress={() => navigation.navigate('Goals')}
        >
          <Feather
            name="target"
            size={currentTab === 'goals' ? selectedIconSize : iconSize}
            color={currentTab === 'goals' ? selectedIconColor : iconsColor}
          />
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.7}
          className={currentTab === 'chat' ? selectedIconStyle : iconsStyle}
          onPress={() => navigation.navigate('Chat')}
        >
          <Entypo
            name="chat"
            size={currentTab === 'chat' ? selectedIconSize : iconSize}
            color={currentTab === 'chat' ? selectedIconColor : iconsColor}
          />
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.7}
          className={currentTab === 'profile' ? selectedIconStyle : iconsStyle}
          onPress={() => navigation.navigate('Profile')}
        >
          <Ionicons
            name="person"
            size={currentTab === 'profile' ? selectedIconSize : iconSize}
            color={currentTab === 'profile' ? selectedIconColor : iconsColor}
          />
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.7}
          className={currentTab === 'settings' ? selectedIconStyle : iconsStyle}
          onPress={() => navigation.navigate('Settings')}
        >
          <Ionicons
            name="settings"
            size={currentTab === 'settings' ? selectedIconSize : iconSize}
            color={currentTab === 'settings' ? selectedIconColor : iconsColor}
          />
        </TouchableOpacity>
      </View>
    </View>
  )
}
