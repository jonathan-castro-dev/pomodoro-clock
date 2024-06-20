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
  activeCycle: Cycle | undefined
  activeCycleId: string | null
  secondsAmountPassed: number
  createNewCycle(cycleInput: CycleInput): void
  interruptCycle(): void
  markCycleAsFinished(): void
  CountSecondsAmountPassed(seconds: number): void
}

const CyclesContext = createContext<CyclesContextData>({} as CyclesContextData)

interface CyclesProviderProps {
  children: ReactNode
}

export function CyclesProvider({ children }: CyclesProviderProps) {
  const [cycles, setCycles] = useState<Cycle[]>([])
  const [activeCycleId, setActiveCycleId] = useState<string | null>(null)
  const [secondsAmountPassed, setSecondsAmountPassed] = useState(0)

  const activeCycle = cycles.find((cycle) => cycle.id === activeCycleId)

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

  function interruptCycle() {
    setCycles((state) =>
      state.map((cycle) => {
        if (cycle.id === activeCycleId) {
          return { ...cycle, interruptDate: new Date() }
        } else {
          return cycle
        }
      }),
    )

    setSecondsAmountPassed(0)
    setActiveCycleId(null)
  }

  function markCycleAsFinished() {
    setCycles((state) =>
      state.map((cycle) => {
        if (cycle.id === activeCycleId) {
          return { ...cycle, finishedDate: new Date() }
        } else {
          return cycle
        }
      }),
    )

    setSecondsAmountPassed(0)
    setActiveCycleId(null)
  }

  function CountSecondsAmountPassed(seconds: number) {
    setSecondsAmountPassed(seconds)
  }

  return (
    <CyclesContext.Provider
      value={{
        cycles,
        activeCycle,
        activeCycleId,
        secondsAmountPassed,
        createNewCycle,
        interruptCycle,
        markCycleAsFinished,
        CountSecondsAmountPassed,
      }}
    >
      {children}
    </CyclesContext.Provider>
  )
}

// eslint-disable-next-line react-refresh/only-export-components
export function useCycles() {
  const context = useContext(CyclesContext)

  return context
}
