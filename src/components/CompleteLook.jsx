import { LOOK_ITEMS } from '../data/product'
import styles from './CompleteLook.module.css'

const StarIcon = () => (
  <svg width="10" height="10" viewBox="0 0 24 24" fill="#0a0a0a" stroke="none">
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
  </svg>
)

function LookCard({ item }) {
  return (
    <div className={styles.card} data-analytics-id="complete-look-card" data-look-item-id={item.id} data-look-item-name={item.name}>
      <div className={styles.imageWrap}>
        <img src={item.img} alt={item.name} className={styles.cardImg} />
        {item.current && (
          <span className={styles.currentBadge}>CURRENTLY VIEWING</span>
        )}
      </div>
      <div className={styles.meta}>
        <p className={styles.name}>{item.name}</p>
        <p className={styles.color}>{item.color}</p>
        <p className={styles.price}>{item.price}</p>
        <div className={styles.reviewRow}>
          <span className={styles.stars}><StarIcon /></span>
          <span className={styles.reviewAverage}>5.0</span>
          <span className={styles.reviewCount}>({item.reviews.toLocaleString()})</span>
        </div>
      </div>
    </div>
  )
}

export default function CompleteLook({ onOpen, onOpenItem, embedded = false }) {
  const handleKeyDown = (event, item) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault()
      onOpenItem?.(item)
    }
  }

  return (
    <section className={`${styles.section} ${embedded ? styles.sectionEmbedded : ''}`} id="pdp-complete-look-section" data-analytics-id="pdp-complete-look-section">
      <div className={`${styles.box} ${embedded ? styles.boxEmbedded : ''}`}>
        <div className={styles.header} id="pdp-complete-look-header" data-analytics-id="pdp-complete-look-header">
          <p className={styles.title} id="pdp-complete-look-title" data-analytics-id="pdp-complete-look-title">COMPLETE THE LOOK</p>
          <span className={styles.itemCount}>{LOOK_ITEMS.length} items</span>
        </div>

        <div className={styles.scroll} id="pdp-complete-look-list" data-analytics-id="pdp-complete-look-list">
          {LOOK_ITEMS.map(item => (
            <div
              key={item.id}
              className={styles.cardButton}
              role="button"
              tabIndex={0}
              onClick={() => onOpenItem?.(item)}
              onKeyDown={(event) => handleKeyDown(event, item)}
              aria-label={`Open shop the look for ${item.name}`}
              id={`pdp-complete-look-item-${item.id}`}
              data-analytics-id="pdp-complete-look-item"
              data-look-item-id={item.id}
              data-look-item-name={item.name}
            >
              <LookCard item={item} />
            </div>
          ))}
        </div>

        <button type="button" className={styles.ctaBtn} onClick={onOpen} id="pdp-complete-look-cta" data-analytics-id="pdp-complete-look-cta">
          COMPLETE THE LOOK
        </button>
      </div>
    </section>
  )
}
