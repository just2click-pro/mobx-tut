import { makeAutoObservable } from 'mobx'
import Athlete from './Athlete'
import { ReactNode, createContext, useContext, useRef } from 'react'

export default class TeamStore {
  constructor(players: Athlete[]) {
    this.players = players
    makeAutoObservable(this)
  }

  state: string = ''
  setState = (state: string) => {
    this.state = state
  }

  mascot: string = ''
  setMascot = (mascot: string) => {
    this.mascot = mascot
  }

  players: Athlete[] = []

  get teamName(): string {
    return this.state + this.mascot
  }

  get totalYearlyCost(): number {
    return this.players.reduce(
      (totalSalary, player) => totalSalary + player.salary,
      0
    )
  }

  addPlayer(player: Athlete) {
    this.players.push(player)
  }
}

const TeamStoreContext = createContext<TeamStore>(null as unknown as TeamStore)

export const useTeamStore = () => useContext(TeamStoreContext)

type Props = {
  children: ReactNode
  players: Athlete[]
}

export function TeamStoreProvider({ children, players }: Props) {
  const store = useRef(new TeamStore(players))

  return (
    <TeamStoreContext.Provider value={store.current}>
      {children}
    </TeamStoreContext.Provider>
  )
}
