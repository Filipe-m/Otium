import { createNativeStackNavigator } from '@react-navigation/native-stack'

const { Navigator, Screen } = createNativeStackNavigator()

import Home from '../screens/Home'

export function AppRoutes() {
  return (
    <Navigator initialRouteName="home" screenOptions={{ headerShown: false }}>
      <Screen name="Home" component={Home} />
    </Navigator>
  )
}
