import {StatusBar} from 'expo-status-bar'
import {Text, TouchableOpacity, View} from 'react-native'

export default function Journal({navigation}) {
    return (
        <View className=" flex-1">
            <TouchableOpacity activeOpacity={0.7} className="mb-4">
                <Text className="font-bold text-xl">Journal</Text>
            </TouchableOpacity>
            <StatusBar style="auto"/>
        </View>
    )
}
