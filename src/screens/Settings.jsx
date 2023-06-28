import {StatusBar} from 'expo-status-bar'
import {Button, DevSettings, Text, View} from 'react-native'
import GoalsDB from '../services/models/Goals'

export default function Settings() {
    return (
        <View className="bg-slate-100 flex-1 mt-2 items-center justify-start">
            {/*       <TouchableOpacity activeOpacity={0.7} className="mb-4">
        <SwitchComponent />
      </TouchableOpacity> */}
            <View className="flex flex-row items-center ">
                <View className="bg-black h-[2] flex-1"></View>
                <Text className="px-2 text-lg">Development Settings</Text>
                <View className="bg-black h-[2] flex-1"></View>
            </View>
            <View className="mt-4">
                <Button
                    onPress={() => {
                        GoalsDB.dropDatabase()
                        DevSettings.reload()
                    }}
                    title="Reset Goals"
                />
            </View>
            <StatusBar style="auto"/>
        </View>
    )
}
