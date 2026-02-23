import { View, Text, StyleSheet } from 'react-native'
import { usePetStore } from '../store/petStore'

export default function MiniStatus() {
  const { hunger, happiness, energy } = usePetStore()

  const formatBar = (value: number) => {
    const total = 5
    const filled = Math.round((value / 100) * total)
    return '▓'.repeat(filled) + '░'.repeat(total - filled)
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>H {formatBar(hunger)}</Text>
      <Text style={styles.text}>F {formatBar(happiness)}</Text>
      <Text style={styles.text}>E {formatBar(energy)}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  text: {
    fontSize: 10,
    fontFamily: 'monospace',
    color: '#065f46',
  },
})