import { useRef, useState, useEffect, useCallback } from 'react'
import { COLORS } from '../data/product'
import styles from './ColorSelector.module.css'

const ArrowIcon = ({ direction }) => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
    <path
      d={direction === 'left' ? 'M9 2L4 7L9 12' : 'M5 2L10 7L5 12'}
      stroke="#0a0a0a"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

export default function ColorSelector({ selectedId, onChange }) {
  const scrollRef = useRef(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(false)

  const checkScroll = useCallback(() => {
    const el = scrollRef.current
    if (!el) return
    setCanScrollLeft(el.scrollLeft > 2)
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 2)
  }, [])

  useEffect(() => {
    const el = scrollRef.current
    if (!el) return
    checkScroll()
    el.addEventListener('scroll', checkScroll, { passive: true })
    window.addEventListener('resize', checkScroll)
    return () => {
      el.removeEventListener('scroll', checkScroll)
      window.removeEventListener('resize', checkScroll)
    }
  }, [checkScroll])

  const scroll = (dir) => {
    const el = scrollRef.current
    if (!el) return
    el.scrollBy({ left: dir * 240, behavior: 'smooth' })
  }

  return (
    <div className={styles.section}>
      <p className={styles.label}>COLOR: <strong>{COLORS.find(c => c.id === selectedId)?.name}</strong></p>
      <div className={styles.carouselWrap}>
        {canScrollLeft && (
          <button className={`${styles.arrowBtn} ${styles.arrowLeft}`} onClick={() => scroll(-1)} aria-label="Scroll left">
            <ArrowIcon direction="left" />
          </button>
        )}
        <div className={styles.swatches} ref={scrollRef}>
          {COLORS.map(color => (
            <button
              key={color.id}
              className={`${styles.swatch} ${selectedId === color.id ? styles.active : ''}`}
              onClick={() => onChange(color)}
              aria-label={color.name}
            >
              <div className={styles.imgWrap}>
                <img src={color.img} alt={color.label} />
                {color.isNew && <span className={styles.newBadge}>NEW</span>}
              </div>
              <div className={styles.swatchName}>{color.label}</div>
            </button>
          ))}
        </div>
        {canScrollRight && (
          <button className={`${styles.arrowBtn} ${styles.arrowRight}`} onClick={() => scroll(1)} aria-label="Scroll right">
            <ArrowIcon direction="right" />
          </button>
        )}
      </div>
    </div>
  )
}
