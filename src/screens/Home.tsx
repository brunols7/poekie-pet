import { useEffect } from 'react'
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native'
import { usePetStore } from '../store/petStore'

export default function Home() {
  const {
    hunger,
    happiness,
    energy,
    feed,
    play,
    sleep,
    updateOverTime,
    isDead,
  } = usePetStore()

  useEffect(() => {
    updateOverTime()

    const interval = setInterval(() => {
      updateOverTime()
    }, 60000)

    return () => clearInterval(interval)
  }, [])

  return (
    <View style={styles.container}>
      <Text style={styles.title}>LED Tamagotchi</Text>

      {isDead ? (
        <Text style={styles.deadText}>Seu pet morreu 💀</Text>
      ) : (
        <>
          <Text>Fome: {hunger}</Text>
          <Text>Felicidade: {happiness}</Text>
          <Text>Energia: {energy}</Text>

          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.button} onPress={feed}>
              <Text>🍗 Alimentar</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button} onPress={play}>
              <Text>🎮 Brincar</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button} onPress={sleep}>
              <Text>😴 Dormir</Text>
            </TouchableOpacity>
          </View>
        </>
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 22,
    marginBottom: 20,
    fontWeight: 'bold',
  },
  buttonContainer: {
    marginTop: 20,
  },
  button: {
    padding: 12,
    backgroundColor: '#ddd',
    marginVertical: 6,
    borderRadius: 8,
  },
  deadText: {
    fontSize: 18,
    color: 'red',
  },
})