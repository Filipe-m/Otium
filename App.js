import { useState } from 'react'
import Routes from './src/routes/index'
import Introduction from './src/screens/Introduction'
import { StatusBar } from 'react-native'

export default function App() {
  const [introductionComplete, setintroductionComplete] = useState(true)

  if (introductionComplete != true) {
    return <Introduction complete={setintroductionComplete} />
  }

  return (
    <>
      <Routes />
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
    </>
  )
}
