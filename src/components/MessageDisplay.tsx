import { Text, StyleSheet } from 'react-native'
import { usePetMood } from '../hooks/usePetMood'
import { useTypewriter } from '../hooks/useTypewriter'
import { useEffect, useState } from 'react'

const MESSAGE_MAP = {
  happy: 'I feel great!',
  hungry: 'I am hungry...',
  sleepy: 'I am getting sleepy...',
  sad: 'I feel really sad...',
  dead: 'Game Over...',
}

export default function MessageDisplay() {
  const mood = usePetMood()
  const message = MESSAGE_MAP[mood]

  const { displayed, isTyping } = useTypewriter(message)

  const [cursorVisible, setCursorVisible] = useState(true)

  useEffect(() => {
    const interval = setInterval(() => {
      setCursorVisible((prev) => !prev)
    }, 500)

    return () => clearInterval(interval)
  }, [])

  return (
    <Text style={styles.message}>
      {displayed}
      {cursorVisible ? '_' : ' '}
    </Text>
  )
}

const styles = StyleSheet.create({
  message: {
    textAlign: 'center',
    fontSize: 14,
    color: '#065f46',
    fontFamily: 'monospace',
    minHeight: 24,
  },
})