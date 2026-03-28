import { useState, useEffect, useRef } from 'react'
import styles from './ProductImage.module.css'

const ChevronDown = () => (
  <svg width="9.5" height="5.5" viewBox="0 0 9.5 5.5" fill="none">
    <path d="M1 1L4.75 4.5L8.5 1" stroke="black" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

const ChevronUp = () => (
  <svg width="9.5" height="5.5" viewBox="0 0 9.5 5.5" fill="none">
    <path d="M8.5 4.5L4.75 1L1 4.5" stroke="black" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

const CloseIcon = () => (
  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
    <path d="M1 1L11 11M11 1L1 11" stroke="#0a0a0a" strokeWidth="1.4" strokeLinecap="round" />
  </svg>
)

const InfoIcon = () => (
  <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
    <circle cx="6.5" cy="6.5" r="5.75" stroke="black" strokeWidth="1.2" />
    <path d="M6.5 5.5V9.5" stroke="black" strokeWidth="1.2" strokeLinecap="round" />
    <circle cx="6.5" cy="3.75" r="0.65" fill="black" />
  </svg>
)

const ChevronLeft = () => (
  <svg width="9" height="14" viewBox="0 0 9 14" fill="none">
    <path d="M7.5 1L1.5 7L7.5 13" stroke="black" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

const MEASURE_ROWS = ['height', 'bust', 'waist', 'hips']

function MeasurementInlineBanner({ model, onCollapse }) {
  return (
    <div className={styles.modelInlineBannerWrap}>
      <button className={styles.modelInlineBanner} onClick={onCollapse}>
        <ChevronLeft />
        <p className={styles.modelInlineBannerText}>
          Aliyah is {model.height},{' '}
          <strong>Chest</strong>({model.bust}){' '}
          <strong>Waist</strong>({model.waist}){' '}
          <strong>Hips</strong>({model.hips}){' '}
          wearing size {model.size}
        </p>
      </button>
    </div>
  )
}

function MeasurementCard({ model, onCollapse }) {
  return (
    <div className={styles.modelCard}>
      <button className={styles.modelCardHeader} onClick={onCollapse}>
        <span className={styles.modelCardTitle}>
          Aliyah wears <strong>{model.size}</strong>
        </span>
        <ChevronUp />
      </button>
      <div className={styles.modelCardBody}>
        {MEASURE_ROWS.map(key => (
          <div key={key} className={styles.measureRow}>
            <span className={styles.measureLabel}>{key.charAt(0).toUpperCase() + key.slice(1)}</span>
            <span className={styles.measureValue}>{model[key]}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

function MeasurementBanner({ model, onClose }) {
  return (
    <div className={styles.modelBanner}>
      <p className={styles.modelBannerText}>
        Aliyah is {model.height},{' '}
        <strong>Chest</strong>({model.bust}){' '}
        <strong>Waist</strong>({model.waist}){' '}
        <strong>Hips</strong>({model.hips}){' '}
        wearing size {model.size}
      </p>
      <button className={styles.modelBannerClose} onClick={onClose} aria-label="Close">
        <CloseIcon />
      </button>
    </div>
  )
}

export default function ProductImage({ src, images, alt, model, onModelClick, showBreadcrumb = false }) {
  const [open, setOpen] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)
  const carouselRef = useRef(null)
  const progressRef = useRef(null)

  useEffect(() => { setOpen(false); setCurrentIndex(0) }, [model])

  const handleScroll = () => {
    if (!carouselRef.current) return
    const { scrollLeft, scrollWidth, offsetWidth } = carouselRef.current
    const index = Math.round(scrollLeft / offsetWidth)
    setCurrentIndex(index)
    const total = scrollWidth / offsetWidth
    const maxScroll = scrollWidth - offsetWidth
    const progress = maxScroll > 0 ? scrollLeft / maxScroll : 0
    const width = (1 / total + progress * (1 - 1 / total)) * 100
    if (progressRef.current) {
      progressRef.current.style.width = `${width}%`
    }
  }

  const imgList = images || [src]
  const total = imgList.length

  return (
    <div className={styles.wrap}>
      {images ? (
        <div className={styles.carousel} ref={carouselRef} onScroll={handleScroll}>
          {imgList.map((imgSrc, i) => (
            <div key={i} className={styles.slide}>
              <img className={styles.img} src={imgSrc} alt={`${alt} ${i + 1}`} />
            </div>
          ))}
        </div>
      ) : (
        <img className={styles.img} src={src} alt={alt} />
      )}

      {showBreadcrumb && (
        <a href="#" className={styles.breadcrumbPill}>
          <svg width="8" height="8" viewBox="0 0 16 16" fill="none">
            <path d="M10 4L6 8L10 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          IMPACT COLLECTION
        </a>
      )}

      <div className={styles.progressTrack}>
        <div
          ref={progressRef}
          className={styles.progressFill}
          style={{ width: `${100 / total}%` }}
        />
      </div>

      {model && (
        <>
          {/* Card variant — pill expands to inline banner */}
          {model.variant === 'card' && (
            open
              ? <MeasurementInlineBanner model={model} onCollapse={() => setOpen(false)} />
              : (
                <div className={styles.modelBadgeWrap}>
                  <button className={styles.modelBadge} onClick={() => setOpen(true)}>
                    {model.badgeText}
                    <ChevronDown />
                  </button>
                </div>
              )
          )}

          {/* Banner variant — static pill on right */}
          {model.variant === 'banner' && (
            open
              ? <MeasurementBanner model={model} onClose={() => setOpen(false)} />
              : (
                <div className={styles.modelBadgeWrapRight}>
                  <button className={styles.modelBadgeStatic} onClick={onModelClick}>
                    {model.badgeText}
                  </button>
                </div>
              )
          )}

          {/* Pill variant — pill expands to card on click */}
          {model.variant === 'pill' && (
            <div className={styles.modelBadgeWrap}>
              {open
                ? <MeasurementCard model={model} onCollapse={() => setOpen(false)} />
                : (
                  <button className={styles.modelBadge} onClick={() => setOpen(true)}>
                    {model.badgeText}
                    <ChevronDown />
                  </button>
                )
              }
            </div>
          )}
        </>
      )}
    </div>
  )
}
