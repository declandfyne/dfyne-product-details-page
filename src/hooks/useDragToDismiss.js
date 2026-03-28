import { useRef, useCallback } from 'react'

/**
 * Hook that adds pull-down-to-dismiss on a bottom sheet.
 * Returns { sheetRef, handleRef } to attach to the sheet and its drag handle.
 * The sheet needs `transition: transform 0.28s ease` in CSS for the snap-back.
 */
export default function useDragToDismiss(onClose, { threshold = 120 } = {}) {
  const sheetRef = useRef(null)
  const startY = useRef(0)
  const currentY = useRef(0)
  const dragging = useRef(false)

  const onTouchStart = useCallback((e) => {
    dragging.current = true
    startY.current = e.touches[0].clientY
    currentY.current = 0
    const sheet = sheetRef.current
    if (sheet) sheet.style.transition = 'none'
  }, [])

  const onTouchMove = useCallback((e) => {
    if (!dragging.current) return
    const dy = e.touches[0].clientY - startY.current
    // Only allow dragging downward
    if (dy < 0) return
    currentY.current = dy
    const sheet = sheetRef.current
    if (sheet) sheet.style.transform = `translateY(${dy}px)`
  }, [])

  const onTouchEnd = useCallback(() => {
    if (!dragging.current) return
    dragging.current = false
    const sheet = sheetRef.current
    if (!sheet) return

    sheet.style.transition = 'transform 0.28s ease'

    if (currentY.current > threshold) {
      // Dismiss — slide fully off screen
      sheet.style.transform = `translateY(100%)`
      setTimeout(onClose, 280)
    } else {
      // Snap back
      sheet.style.transform = 'translateY(0)'
    }
    currentY.current = 0
  }, [onClose, threshold])

  const handleProps = {
    onTouchStart,
    onTouchMove,
    onTouchEnd,
  }

  return { sheetRef, handleProps }
}
