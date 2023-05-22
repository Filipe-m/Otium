import React, { useRef, useState, useEffect } from 'react'
import { StatusBar } from 'expo-status-bar'
import {
  Text,
  View,
  ScrollView,
  TextInput,
  TouchableOpacity,
  Alert
} from 'react-native'
import { FontAwesome } from '@expo/vector-icons'

export default function Messages(){
  const scrollViewRef = useRef()
  useEffect(()=>{
    scrollViewRef.current.scrollToEnd({ animated: false })
  })


  const userMessage =
    'bg-green-500 py-4 w-64 text-lg pr-4 text-right rounded-xl'

  const reciverMessage =
    'bg-slate-400 py-4 w-64 text-lg pl-4 text-left rounded-xl'
  return(
    <ScrollView
    className="bg-cyan-200 gap-y-4 mt-1 pb-4 mb-4 "
    ref={scrollViewRef}
    onContentSizeChange={() =>
      scrollViewRef.current.scrollToEnd({ animated: true })
    }
  >
    <View className="pr-2 w-full items-end">
      <Text className={userMessage}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        eiusmod tempor incididunt ut labore et dolore magna aliqua.
        Scelerisque eu ultrices vitae auctor eu augue ut. Nascetur ridiculus
        mus mauris vitae ultricies leo integer malesuada nunc.{' '}
      </Text>
    </View>
    <View className="pl-2 w-full items-start">
      <Text className={reciverMessage}>
        Nunc non blandit massa enim nec dui nunc mattis. Donec pretium
        vulputate sapien nec sagittis aliquam. Fermentum odio eu feugiat
        pretium. Egestas congue quisque egestas diam. Dui nunc mattis enim
        ut tellus elementum sagittis. Urna nec tincidunt praesent semper.
        Elit at imperdiet dui accumsan sit amet nulla facilisi morbi.
      </Text>
    </View>
  </ScrollView>
  )
}