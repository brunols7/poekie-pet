import { View, StyleSheet } from 'react-native'
import PetAscii from './PetAscii'
import MessageDisplay from './MessageDisplay'
import MiniStatus from './MiniStatus'

export default function LedScreen() {
  return (
    <View style={styles.screen}>
      <MiniStatus />
      <PetAscii />
      <MessageDisplay />
    </View>
  )
}

const styles = StyleSheet.create({
  screen: {
    width: '100%',
    height: 200,
    backgroundColor: '#b6fcd5',
    borderRadius: 20,
    padding: 15,
    justifyContent: 'space-between',
  },
})