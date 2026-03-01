import { useEffect } from 'react'
import TamagotchiShell from '../components/TamagotchiShell'
import { usePetStore } from '../store/petStore'
import { SafeAreaView } from 'react-native-safe-area-context'
import { StatusBar } from 'expo-status-bar'

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

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <TamagotchiShell />
      <StatusBar style='auto'/>
    </SafeAreaView>
  );
}