import { useRef } from 'react'
import {
  View,
  TouchableWithoutFeedback,
  Text,
  StyleSheet,
  Animated,
} from 'react-native'
import { usePetStore } from '../store/petStore'

function AnimatedButton({
  emoji,
  onPress,
}: {
  emoji: string
  onPress: () => void
}) {
  const scale = useRef(new Animated.Value(1)).current

  const pressIn = () => {
    Animated.spring(scale, {
      toValue: 0.9,
      useNativeDriver: true,
    }).start()
  }

  const pressOut = () => {
    Animated.spring(scale, {
      toValue: 1,
      useNativeDriver: true,
    }).start()
  }

  return (
    <TouchableWithoutFeedback
      onPressIn={pressIn}
      onPressOut={pressOut}
      onPress={onPress}
    >
      <Animated.View
        style={[
          styles.button,
          { transform: [{ scale }] },
        ]}
      >
        <Text style={styles.text}>{emoji}</Text>
      </Animated.View>
    </TouchableWithoutFeedback>
  )
}

export default function ActionButtons() {
  const { feed, play, sleep } = usePetStore()

  return (
    <View style={styles.container}>
      <AnimatedButton emoji="🍗" onPress={feed} />
      <AnimatedButton emoji="🎮" onPress={play} />
      <AnimatedButton emoji="😴" onPress={sleep} />
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
    elevation: 6,
  },
  text: {
    fontSize: 22,
  },
})