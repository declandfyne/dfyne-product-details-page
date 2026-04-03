import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import styles from './ProductImage.module.css'

const ChevronDown = () => (
  <svg width="9.5" height="5.5" viewBox="0 0 9.5 5.5" fill="none">
    <path d="M1 1L4.75 4.5L8.5 1" stroke="black" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

const BreadcrumbChevronDown = () => (
  <svg width="8" height="8" viewBox="0 0 16 16" fill="none" aria-hidden="true">
    <path d="M4 6L8 10L12 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
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

const ZoomCursorIcon = ({ zoomed = false }) => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
    <path d="M5 10H15" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    {!zoomed && <path d="M10 5V15" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />}
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
  const [hoveredIndex, setHoveredIndex] = useState(null)
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 })
  const [zoomedIndex, setZoomedIndex] = useState(null)
  const [zoomPosition, setZoomPosition] = useState({ x: 50, y: 50 })
  const carouselRef = useRef(null)

  useEffect(() => {
    setOpen(false)
    setCurrentIndex(0)
    setZoomedIndex(null)
    setZoomPosition({ x: 50, y: 50 })
  }, [model, src, images])

  const [scrollProgress, setScrollProgress] = useState(0)

  const handleScroll = () => {
    if (!carouselRef.current) return
    const { scrollLeft, scrollWidth, offsetWidth } = carouselRef.current
    const index = Math.round(scrollLeft / offsetWidth)
    setCurrentIndex(index)
    const maxScroll = scrollWidth - offsetWidth
    setScrollProgress(maxScroll > 0 ? scrollLeft / maxScroll : 0)
  }

  const mediaList = (images && images.length ? images : [{ type: 'image', src }]).map(item => (
    typeof item === 'string' ? { type: 'image', src: item } : item
  ))
  const total = mediaList.length

  const handlePointerMove = (event, index) => {
    const rect = event.currentTarget.getBoundingClientRect()
    setHoveredIndex(index)
    const x = ((event.clientX - rect.left) / rect.width) * 100
    const y = ((event.clientY - rect.top) / rect.height) * 100
    setCursorPosition({
      x: event.clientX - rect.left,
      y: event.clientY - rect.top,
    })
    setZoomPosition({
      x: Math.max(0, Math.min(100, x)),
      y: Math.max(0, Math.min(100, y)),
    })
  }

  const handlePointerLeave = (index) => {
    setHoveredIndex(null)
    if (zoomedIndex !== index) {
      setZoomPosition({ x: 50, y: 50 })
    }
  }

  const toggleZoom = (index) => {
    setZoomedIndex(prev => (prev === index ? null : index))
  }

  return (
    <section className={styles.wrap} id="pdp-media-gallery" data-analytics-id="pdp-media-gallery">
      {images ? (
        <div className={styles.carousel} ref={carouselRef} onScroll={handleScroll} id="pdp-media-carousel" data-analytics-id="pdp-media-carousel">
          {mediaList.map((item, i) => (
            <div key={i} className={styles.slide} id={`pdp-media-item-${i + 1}`} data-analytics-id="pdp-media-item" data-media-index={i + 1} data-media-type={item.type}>
              {item.type === 'video' ? (
                <div className={`${styles.slideTrigger} ${styles.videoTrigger}`}>
                  <video
                    className={styles.img}
                    src={item.src}
                    autoPlay
                    muted
                    loop
                    playsInline
                    controls={false}
                    aria-label={`${alt} video ${i + 1}`}
                    data-analytics-id="pdp-media-video"
                  />
                </div>
              ) : (
                <button
                  type="button"
                  className={`${styles.slideTrigger} ${zoomedIndex === i ? styles.slideTriggerZoomed : ''}`}
                  onClick={() => toggleZoom(i)}
                  onMouseMove={(event) => handlePointerMove(event, i)}
                  onMouseLeave={() => handlePointerLeave(i)}
                  aria-label={zoomedIndex === i ? `Zoom out image ${i + 1} of ${total}` : `Zoom in image ${i + 1} of ${total}`}
                  data-analytics-id="pdp-media-image"
                  data-media-index={i + 1}
                >
                  <img
                    className={`${styles.img} ${zoomedIndex === i ? styles.imgZoomed : ''}`}
                    src={item.src}
                    alt={`${alt} ${i + 1}`}
                    style={zoomedIndex === i ? { transformOrigin: `${zoomPosition.x}% ${zoomPosition.y}%` } : undefined}
                  />
                  {hoveredIndex === i && (
                    <span
                      className={styles.cursorPlus}
                      style={{ left: `${cursorPosition.x}px`, top: `${cursorPosition.y}px` }}
                      aria-hidden="true"
                    >
                      <ZoomCursorIcon zoomed={zoomedIndex === i} />
                    </span>
                  )}
                </button>
              )}

              {model?.variant === 'banner' && !open && i === 1 && (
                <div className={styles.modelBadgeWrapDesktopImage}>
                  <button className={styles.modelBadgeStatic} onClick={onModelClick} id="pdp-model-size-trigger-desktop" data-analytics-id="pdp-model-size-trigger-desktop">
                    {model.badgeText}
                    <BreadcrumbChevronDown />
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>
      ) : (
        <button
          type="button"
          className={`${styles.slideTrigger} ${styles.singleImageTrigger} ${zoomedIndex === 0 ? styles.slideTriggerZoomed : ''}`}
          onClick={() => toggleZoom(0)}
          onMouseMove={(event) => handlePointerMove(event, 0)}
          onMouseLeave={() => handlePointerLeave(0)}
          aria-label={zoomedIndex === 0 ? 'Zoom out image' : 'Zoom in image'}
          data-analytics-id="pdp-media-image"
          data-media-index={1}
        >
          <img
            className={`${styles.img} ${zoomedIndex === 0 ? styles.imgZoomed : ''}`}
            src={src}
            alt={alt}
            style={zoomedIndex === 0 ? { transformOrigin: `${zoomPosition.x}% ${zoomPosition.y}%` } : undefined}
          />
          {hoveredIndex === 0 && (
            <span
              className={styles.cursorPlus}
              style={{ left: `${cursorPosition.x}px`, top: `${cursorPosition.y}px` }}
              aria-hidden="true"
            >
              <ZoomCursorIcon zoomed={zoomedIndex === 0} />
            </span>
          )}
        </button>
      )}

      {showBreadcrumb && (
        <Link to="/collection" className={styles.breadcrumbPill} id="pdp-media-breadcrumb" data-analytics-id="pdp-media-breadcrumb">
          <svg width="8" height="8" viewBox="0 0 16 16" fill="none">
            <path d="M10 4L6 8L10 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          IMPACT COLLECTION
        </Link>
      )}

      <div className={styles.progressTrack} data-analytics-id="pdp-media-progress">
        <div
          className={styles.progressFill}
          style={{ width: `${(1 / total + scrollProgress * (1 - 1 / total)) * 100}%` }}
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
                  <button className={styles.modelBadge} onClick={() => setOpen(true)} id="pdp-model-badge" data-analytics-id="pdp-model-badge">
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
                  <button className={styles.modelBadgeStatic} onClick={onModelClick} id="pdp-model-size-trigger" data-analytics-id="pdp-model-size-trigger">
                    {model.badgeText}
                    <BreadcrumbChevronDown />
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
                  <button className={styles.modelBadge} onClick={() => setOpen(true)} id="pdp-model-badge" data-analytics-id="pdp-model-badge">
                    {model.badgeText}
                    <ChevronDown />
                  </button>
                )
              }
            </div>
          )}
        </>
      )}
    </section>
  )
}
