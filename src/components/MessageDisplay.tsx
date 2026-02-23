import { Text, StyleSheet } from 'react-native'
import { usePetMood } from '../hooks/usePetMood'

const MESSAGE_MAP = {
  happy: 'Estou feliz!',
  hungry: 'Estou com fome...',
  sleepy: 'Estou com sono...',
  sad: 'Estou triste...',
  dead: 'Game Over',
}

export default function MessageDisplay() {
  const mood = usePetMood()

  return (
    <Text style={styles.message}>
      {MESSAGE_MAP[mood]}
    </Text>
  )
}

const styles = StyleSheet.create({
  message: {
    textAlign: 'center',
    fontSize: 14,
    color: '#065f46',
    fontFamily: 'monospace',
  },
})