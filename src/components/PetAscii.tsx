import { useEffect, useState } from 'react'
import { Text, StyleSheet, View } from 'react-native'
import { usePetMood } from '../hooks/usePetMood'

const FACE = {
  sad: '/ᐠ ◞ ᆺ ◟マ',
  happy: '≽^•⩊•^≼',
  hungry: 'ฅ^._.^ฅ',
  sleepy: '/ᐠ - ˕ -マ',
  dead: '≽^x_x^≼',
}

const BLINK = {
  sad: '/ᐠ - ᆺ -マ',
  happy: '≽^-⩊-^≼',
  hungry: 'ฅ^-_-^ฅ',
  sleepy: '/ᐠ - ˕ -マ', 
  dead: '≽^x_x^≼',     
}

export default function PetAscii() {
  const mood = usePetMood()
  const [frame, setFrame] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setFrame((prev) => prev + 1)
    }, 800)

    return () => clearInterval(interval)
  }, [])

  const isBlinkFrame = frame % 6 === 0
  const isAltFrame = frame % 2 === 0

  const getFace = () => {
    if (mood === 'dead') return FACE.dead
    if (isBlinkFrame) return BLINK[mood]
    return FACE[mood]
  }

  const renderExtra = () => {
    if (mood === 'sleepy') {
      return (
        <Text style={[styles.extra, styles.right]}>
          {isAltFrame ? 'Z 𝗓 ᶻ' : 'ᶻ 𝗓 𐰁'}
        </Text>
      )
    }

    if (mood === 'hungry') {
      return (
        <Text style={[styles.extra, styles.right]}>
          {isAltFrame ? '*' : '* *'}
        </Text>
      )
    }

    if (mood === 'happy') {
      return (
        <Text style={[styles.extra, styles.right]}>
          {isAltFrame ? '~' : ''}
        </Text>
      )
    }

    if (mood === 'sad') {
      return (
        <Text
          style={[
            styles.tear,
            { top: isAltFrame ? 63 : 68 },
          ]}
        >
          𓄼𓄼
        </Text>
      )
    }

    return null
  }

  return (
    <View style={styles.container}>
      {renderExtra()}
      <Text style={styles.face}>{getFace()}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: 140,
    width: 260,
    position: 'relative',
  },
  face: {
    fontFamily: 'monospace',
    fontSize: 48,
    color: '#065f46',
    textAlign: 'center',
  },
  extra: {
    position: 'absolute',
    top: 0,
    fontFamily: 'monospace',
    fontSize: 22,
    color: '#065f46',
  },
  right: {
    right: 20,
  },
  tear: {
    position: 'absolute',
    fontSize: 20,
    left: '65%',
  },
})