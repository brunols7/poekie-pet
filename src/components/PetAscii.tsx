import { Text, StyleSheet } from 'react-native'

export default function PetAscii() {
  return (
    <Text style={styles.ascii}>
      {`( •_• )`}
    </Text>
  )
}

const styles = StyleSheet.create({
  ascii: {
    fontFamily: 'monospace',
    fontSize: 26,
    textAlign: 'center',
    color: '#065f46',
  },
})