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
    <section className={styles.section} id="pdp-color-selector" data-analytics-id="pdp-color-selector">
      <p className={styles.label} id="pdp-color-label" data-analytics-id="pdp-color-label">COLOR: <strong>{COLORS.find(c => c.id === selectedId)?.name}</strong></p>
      <div className={styles.carouselWrap} id="pdp-color-carousel" data-analytics-id="pdp-color-carousel">
        {canScrollLeft && (
          <button className={`${styles.arrowBtn} ${styles.arrowLeft}`} onClick={() => scroll(-1)} aria-label="Scroll left" data-analytics-id="pdp-color-scroll-left">
            <ArrowIcon direction="left" />
          </button>
        )}
        <div className={styles.swatches} ref={scrollRef} data-analytics-id="pdp-color-swatch-list">
          {COLORS.map(color => (
            <button
              key={color.id}
              className={`${styles.swatch} ${selectedId === color.id ? styles.active : ''}`}
              onClick={() => onChange(color)}
              aria-label={color.name}
              id={`pdp-color-${color.id}`}
              data-analytics-id="pdp-color-swatch"
              data-color-id={color.id}
              data-color-name={color.name}
              data-selected={selectedId === color.id}
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
          <button className={`${styles.arrowBtn} ${styles.arrowRight}`} onClick={() => scroll(1)} aria-label="Scroll right" data-analytics-id="pdp-color-scroll-right">
            <ArrowIcon direction="right" />
          </button>
        )}
      </div>
    </section>
  )
}
