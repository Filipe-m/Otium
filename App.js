import { useState } from 'react'
import { StatusBar } from 'react-native'
import Routes from './src/routes/index'
import Introduction from './src/screens/Introduction'

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
