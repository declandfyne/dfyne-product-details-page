import { useEffect, useState } from 'react'

const MODAL_TRANSITION_DURATION_MS = 180

const getModalTransitionDuration = () => {
  if (typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    return 0
  }

  return MODAL_TRANSITION_DURATION_MS
}

export default function useModalTransition(open) {
  const [isRendered, setIsRendered] = useState(open)
  const [isVisible, setIsVisible] = useState(open)

  useEffect(() => {
    let timeoutId
    let frameId

    if (open) {
      setIsRendered(true)

      if (typeof window === 'undefined') {
        setIsVisible(true)
        return undefined
      }

      frameId = window.requestAnimationFrame(() => {
        setIsVisible(true)
      })

      return () => window.cancelAnimationFrame(frameId)
    }

    setIsVisible(false)

    if (!isRendered) return undefined

    const duration = getModalTransitionDuration()
    if (duration === 0) {
      setIsRendered(false)
      return undefined
    }

    timeoutId = window.setTimeout(() => {
      setIsRendered(false)
    }, duration)

    return () => window.clearTimeout(timeoutId)
  }, [open, isRendered])

  return { isRendered, isVisible }
}
