import { useEffect, useState } from 'react'

export function useTypewriter(text: string, speed = 40) {
  const [displayed, setDisplayed] = useState('')
  const [isTyping, setIsTyping] = useState(false)

  useEffect(() => {
    let index = 0
    let typingInterval: NodeJS.Timeout

    setDisplayed('')
    setIsTyping(false)

    const startDelay = setTimeout(() => {
      setIsTyping(true)

      typingInterval = setInterval(() => {
        index++

        setDisplayed(text.slice(0, index))

        if (index >= text.length) {
          clearInterval(typingInterval)
          setIsTyping(false)
        }
      }, speed)
    }, 600)

    return () => {
      clearTimeout(startDelay)
      if (typingInterval) clearInterval(typingInterval)
    }
  }, [text])

  return { displayed, isTyping }
}