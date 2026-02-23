import { Text, StyleSheet } from 'react-native'

export default function MessageDisplay() {
  return (
    <Text style={styles.message}>
      Estou bem :)
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