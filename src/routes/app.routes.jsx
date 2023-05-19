import { createNativeStackNavigator } from '@react-navigation/native-stack'

const { Navigator, Screen } = createNativeStackNavigator()

import Chat from '../screens/Chat'
import Goals from '../screens/Goals'
import Settings from '../screens/Settings'
import Profile from '../screens/Profile'
import Journal from '../screens/Journal'

export function AppRoutes() {
  return (
    <Navigator initialRouteName="Chat" screenOptions={{ headerShown: false }}>
      <Screen name='Journal' component={Journal} />
      <Screen name='Goals' component={Goals} />
      <Screen name="Chat" component={Chat} />
      <Screen name='Profile' component={Profile} />
      <Screen name='Settings' component={Settings} />
    </Navigator>
  )
}
