import { View, Text, Button } from 'react-native'

export default function Introduction({ complete }) {
  return (
    <View className="flex-1 items-center justify-center">
      <Text> Introduction</Text>
      <Button title="Botão" onPress={() => complete(true)}></Button>
    </View>
  )
}
