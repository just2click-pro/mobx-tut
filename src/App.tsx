import './App.css'
import Athlete from './Athlete'
import MoneyForm from './MoneyForm'

import Roster from './Roster'
import { TeamStoreProvider } from './TeamStore'

const labronJames = new Athlete('Labron James', 38, 9)
const stephCurry = new Athlete('Steph Curry', 34, 5)

function getPlayers(): Athlete[] {
  return [labronJames, stephCurry]
}

function App() {
  const players = getPlayers()
  return (
    <>
      <TeamStoreProvider players={players}>
        <Roster />
        <MoneyForm />
      </TeamStoreProvider>
    </>
  )
}

export default App
