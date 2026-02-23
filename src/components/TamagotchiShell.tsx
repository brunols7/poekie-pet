import { View, StyleSheet } from 'react-native'
import LedScreen from './LedScreen'
import ActionButtons from './ActionButtons'
import DebugPanel from './DebugPanel'

export default function TamagotchiShell() {
  return (
    <View style={styles.wrapper}>
      <View style={styles.shell}>
        <LedScreen />
        <ActionButtons />
        {/* <DebugPanel /> */}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#d7e3fc',
  },
  shell: {
    width: 320,
    padding: 20,
    borderRadius: 40,
    backgroundColor: '#ff90b3',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 10,
    elevation: 10,
  },
})