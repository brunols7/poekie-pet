import { View, TouchableOpacity, Text, StyleSheet } from 'react-native'
import { usePetStore } from '../store/petStore'

export default function ActionButtons() {
  const { feed, play, sleep } = usePetStore()

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={feed}>
        <Text style={styles.text}>🍗</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={play}>
        <Text style={styles.text}>🎮</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={sleep}>
        <Text style={styles.text}>😴</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginTop: 20,
    gap: 20,
  },
  button: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#ffffff',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
  },
  text: {
    fontSize: 22,
  },
})