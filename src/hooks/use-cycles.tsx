import { ReactNode, createContext, useContext, useState } from 'react'

interface Cycle {
  id: string
  name: string
  workTime: number
  shortBreakTime: number
  longBreakTime: number
  createdAt: Date
  interruptDate?: Date
  finishedDate?: Date
}

type CycleInput = Omit<Cycle, 'id' | 'name' | 'createdAt'>

interface CyclesContextData {
  cycles: Cycle[]
  activeCycleId: string | null
  createNewCycle(cycleInput: CycleInput): void
  stopCycle(): void
  finishedCycle(): void
}

const CyclesContext = createContext<CyclesContextData>({} as CyclesContextData)

interface CyclesProviderProps {
  children: ReactNode
}

export function CyclesProvider({ children }: CyclesProviderProps) {
  const [cycles, setCycles] = useState<Cycle[]>([])
  const [activeCycleId, setActiveCycleId] = useState<string | null>(null)

  function createNewCycle(cycleInput: CycleInput) {
    const id = String(new Date().getTime())
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
    setActiveCycleId(id)
  }

  function stopCycle() {
    setActiveCycleId(null)
  }

  function finishedCycle() {
    setCycles((state) =>
      state.map((cycle) => {
        if (cycle.id === activeCycleId) {
          return { ...cycle, finishedDate: new Date() }
        } else {
          return cycle
        }
      }),
    )

    setActiveCycleId(null)
  }

  return (
    <CyclesContext.Provider
      value={{
        cycles,
        activeCycleId,
        createNewCycle,
        stopCycle,
        finishedCycle,
      }}
    >
      {children}
    </CyclesContext.Provider>
  )
}

export function useCycles() {
  const context = useContext(CyclesContext)

  return context
}
