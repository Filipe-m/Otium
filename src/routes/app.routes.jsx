import { Entypo } from '@expo/vector-icons'
import { Feather } from '@expo/vector-icons'
import { Ionicons } from '@expo/vector-icons'
import Chat from '../screens/Chat'
import Goals from '../screens/Goals'
import Settings from '../screens/Settings'
import Profile from '../screens/Profile'
import Journal from '../screens/Journal'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import colors from 'tailwindcss/colors'
const selectedIconColor = colors.amber[400]
const backGroundTabColor = colors.cyan[950]

const Tab = createBottomTabNavigator()

export function AppRoutes() {
  return (
    <Tab.Navigator
      initialRouteName="Chat"
      screenOptions={{
        tabBarActiveTintColor: selectedIconColor,
        headerShown: false,
        tabBarHideOnKeyboard: true,
        tabBarShowLabel:false,
        tabBarStyle: {
          backgroundColor: backGroundTabColor,
          height: 60,
          paddingBottom:10,
          paddingTop:10,
        }
      }}
      backBehavior="history"
    >
      <Tab.Screen
        name="Journal"
        component={Journal}
        options={{
          tabBarLabel: 'Journal',
          tabBarIcon: ({ color, size }) => (
            <Entypo name="book" size={size} color={color} />
          )
        }}
      />
      <Tab.Screen
        name="Goals"
        component={Goals}
        options={{
          tabBarLabel: 'Goals',
          tabBarIcon: ({ color, size }) => (
            <Feather name="target" color={color} size={size} />
          )
        }}
      />
      <Tab.Screen
        name="Chat"
        component={Chat}
        options={{
          tabBarLabel: 'Chat',
          tabBarIcon: ({ color, size }) => (
            <Entypo name="chat" color={color} size={size} />
          )
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="person" color={color} size={size} />
          )
        }}
      />
      <Tab.Screen
        name="Settings"
        component={Settings}
        options={{
          tabBarLabel: 'Settings',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="settings" color={color} size={size} />
          )
        }}
      />
    </Tab.Navigator>
  )
}
