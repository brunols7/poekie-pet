import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { clamp } from '../utils/clamp'

type PetState = {
  hunger: number
  happiness: number
  energy: number
  lastUpdatedAt: number
  isDead: boolean

  feed: () => void
  play: () => void
  sleep: () => void
  updateOverTime: () => void
}

export const usePetStore = create<PetState>()(
  persist(
    (set, get) => ({
      hunger: 50,
      happiness: 50,
      energy: 50,
      lastUpdatedAt: Date.now(),
      isDead: false,

      feed: () =>
        set((state) => ({
          hunger: clamp(state.hunger - 20),
        })),

      play: () =>
        set((state) => ({
          happiness: clamp(state.happiness + 15),
          energy: clamp(state.energy - 10),
        })),

      sleep: () =>
        set((state) => ({
          energy: clamp(state.energy + 25),
        })),

      updateOverTime: () => {
        const now = Date.now()
        const { lastUpdatedAt } = get()

        const minutesPassed = Math.floor(
          (now - lastUpdatedAt) / 60000
        )

        if (minutesPassed <= 0) return

        set((state) => {
          const newHunger = clamp(state.hunger + minutesPassed * 2)
          const newEnergy = clamp(state.energy - minutesPassed)
          const newHappiness = clamp(state.happiness - minutesPassed)

          const dead =
            newHunger >= 100 ||
            newEnergy <= 0 ||
            newHappiness <= 0

          return {
            hunger: newHunger,
            energy: newEnergy,
            happiness: newHappiness,
            lastUpdatedAt: now,
            isDead: dead,
          }
        })
      },
    }),
    {
      name: 'pet-storage',
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
)