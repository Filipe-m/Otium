import React, { useRef, useState, useEffect } from 'react'
import { useIsFocused } from '@react-navigation/native'
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

export default function Chat({ navigation }) {
  const scrollViewRef = useRef()

  const isFocused = useIsFocused()
  useEffect(() => {
    if (isFocused) {
      scrollViewRef.current.scrollToEnd({ animated: false })
    }
  }, [isFocused])

  const [number, onChangeNumber] = React.useState('')

  const userMessage =
    'bg-green-500 py-4 w-64 text-lg pr-4 text-right rounded-xl'

  const reciverMessage =
    'bg-slate-400 py-4 w-64 text-lg pl-4 text-left rounded-xl'

  return (
    <View className=" flex-1 bg-cyan-200 ">
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
      <View className="flex flex-row flex-grow items-center max-w-[100vw] mb-3  px-2  justify-between">
        <TextInput
          className=" bg-white pl-4 mr-2 max-w-[80%] flex flex-grow text-lg px-3 py-2 max-h-16 rounded-3xl"
          onChangeText={onChangeNumber}
          value={number}
          placeholder=""
          keyboardType="default"
          multiline={true}
          numberOfLines={4}
        />
        <TouchableOpacity
          activeOpacity={0.7}
          className="bg-sky-600 p-3 rounded-full"
          onPress={() => {
            Alert.alert(number)
            onChangeNumber('')
            scrollViewRef.current.scrollToEnd({ animated: false })
          }}
        >
          <FontAwesome name="send-o" size={28} color="black" />
        </TouchableOpacity>
        <View></View>
      </View>
      <StatusBar style="auto" hidden={true} />
    </View>
  )
}
