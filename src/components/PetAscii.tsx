import { Text, StyleSheet } from 'react-native'
import { usePetMood } from '../hooks/usePetMood'

const ASCII_MAP = {
  happy: `( •‿• )`,
  hungry: `( •︵• )`,
  sleepy: `( -_- ) zZ`,
  sad: `( T_T )`,
  dead: `( x_x )`,
}

export default function PetAscii() {
  const mood = usePetMood()

  return (
    <Text style={styles.ascii}>
      {ASCII_MAP[mood]}
    </Text>
  )
}

const styles = StyleSheet.create({
  ascii: {
    fontFamily: 'monospace',
    fontSize: 28,
    textAlign: 'center',
    color: '#065f46',
  },
})