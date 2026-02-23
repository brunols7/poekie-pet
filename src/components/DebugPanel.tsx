import { View, TouchableOpacity, Text, StyleSheet } from 'react-native'
import { usePetStore } from '../store/petStore'
import { PetMood } from '../hooks/usePetMood'

export default function DebugPanel() {
  const setMoodDebug = usePetStore((s) => s.setMoodDebug)
  const resetPet = usePetStore((s) => s.resetPet)

  const moods: PetMood[] = [
    'happy',
    'hungry',
    'sleepy',
    'sad',
    'dead',
  ]

  return (
    <View style={styles.container}>
      {moods.map((mood) => (
        <TouchableOpacity
          key={mood}
          style={styles.debugButton}
          onPress={() => setMoodDebug(mood)}
        >
          <Text style={styles.text}>{mood}</Text>
        </TouchableOpacity>
      ))}

      <TouchableOpacity
        style={[styles.debugButton, styles.reset]}
        onPress={resetPet}
      >
        <Text style={styles.text}>reset</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 6,
    justifyContent: 'center',
  },
  debugButton: {
    paddingVertical: 6,
    paddingHorizontal: 10,
    backgroundColor: '#333',
    borderRadius: 8,
  },
  reset: {
    backgroundColor: '#aa0000',
  },
  text: {
    color: '#fff',
    fontSize: 12,
  },
})