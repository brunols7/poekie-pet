import { useEffect } from 'react'
import TamagotchiShell from '../components/TamagotchiShell'
import { usePetStore } from '../store/petStore'

export default function Home() {
  const updateOverTime = usePetStore(
    (state) => state.updateOverTime
  )

  useEffect(() => {
    updateOverTime()

    const interval = setInterval(() => {
      updateOverTime()
    }, 60000)

    return () => clearInterval(interval)
  }, [])

  return <TamagotchiShell />
}