import { usePetStore } from '../store/petStore'

export type PetMood =
  | 'happy'
  | 'hungry'
  | 'sleepy'
  | 'sad'
  | 'dead'

export const usePetMood = (): PetMood => {
  const { hunger, energy, happiness, isDead } = usePetStore()

  if (isDead) return 'dead'
  if (hunger > 80) return 'hungry'
  if (energy < 20) return 'sleepy'
  if (happiness < 20) return 'sad'

  return 'happy'
}