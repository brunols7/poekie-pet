import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { clamp } from '../utils/clamp'
import { PetMood } from '../hooks/usePetMood'

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

  // DEBUG
  setMoodDebug: (mood: PetMood) => void
  resetPet: () => void
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

      // 🔥 DEBUG CONTROLS
      setMoodDebug: (mood) => {
        switch (mood) {
          case 'happy':
            set({
              hunger: 40,
              happiness: 80,
              energy: 80,
              isDead: false,
            })
            break
          case 'hungry':
            set({
              hunger: 95,
              happiness: 50,
              energy: 50,
              isDead: false,
            })
            break
          case 'sleepy':
            set({
              hunger: 50,
              happiness: 50,
              energy: 10,
              isDead: false,
            })
            break
          case 'sad':
            set({
              hunger: 50,
              happiness: 10,
              energy: 50,
              isDead: false,
            })
            break
          case 'dead':
            set({
              hunger: 100,
              happiness: 0,
              energy: 0,
              isDead: true,
            })
            break
        }
      },

      resetPet: () =>
        set({
          hunger: 50,
          happiness: 50,
          energy: 50,
          isDead: false,
          lastUpdatedAt: Date.now(),
        }),
    }),
    {
      name: 'pet-storage',
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
)