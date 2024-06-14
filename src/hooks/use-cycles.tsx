import { ReactNode, createContext, useContext, useState } from 'react'

interface Cycle {
  id: number
  name: string
  workTime: number
  shortBreakTime: number
  longBreakTime: number
  createdAt: Date
}

type CycleInput = Omit<Cycle, 'id' | 'name' | 'createdAt'>

interface CyclesContextData {
  cycles: Cycle[]
  createNewCycle(cycleInput: CycleInput): void
}

const CyclesContext = createContext<CyclesContextData>({} as CyclesContextData)

interface CyclesProviderProps {
  children: ReactNode
}

export function CyclesProvider({ children }: CyclesProviderProps) {
  const [cycles, setCycles] = useState<Cycle[]>([])

  function createNewCycle(cycleInput: CycleInput) {
    const id = new Date().getTime()
    const createdAt = new Date()

    const newCycle: Cycle = {
      id,
      name: `Pomodoro ${cycles.length + 1}`,
      workTime: cycleInput.workTime,
      shortBreakTime: cycleInput.shortBreakTime,
      longBreakTime: cycleInput.longBreakTime,
      createdAt,
    }

    setCycles((state) => [...state, newCycle])
    console.log(cycles)
  }

  return (
    <CyclesContext.Provider value={{ cycles, createNewCycle }}>
      {children}
    </CyclesContext.Provider>
  )
}

export function useCycles() {
  const context = useContext(CyclesContext)

  return context
}
