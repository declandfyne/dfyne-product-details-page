import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { RELATED_RANGES_ITEMS } from '../data/product'
import styles from './RelatedRangesSection.module.css'

const StarIcon = () => (
  <svg width="10" height="10" viewBox="0 0 24 24" fill="#0a0a0a" stroke="none" aria-hidden="true">
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
  </svg>
)

const ArrowIcon = ({ direction = 'left' }) => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
    <path
      d={direction === 'left' ? 'M8.8 2.2L4.4 7L8.8 11.8' : 'M5.2 2.2L9.6 7L5.2 11.8'}
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

function RelatedCard({ item }) {
  return (
    <Link to="/product" className={styles.card}>
      <div className={styles.imageWrap}>
        <img className={styles.cardImg} src={item.img} alt={`${item.name} - ${item.color}`} />
        {item.badge && (
          <span className={`${styles.badge} ${item.badge === 'LIMITED EDITION' ? styles.badgeWide : ''}`}>
            {item.badge}
          </span>
        )}
      </div>

      <div className={styles.meta}>
        <p className={styles.name}>{item.name}</p>
        <p className={styles.color}>{item.color}</p>
        <p className={styles.price}>{item.price}</p>
        <div className={styles.reviewRow}>
          <span className={styles.stars}>
            {[1, 2, 3, 4, 5].map(i => <StarIcon key={i} />)}
          </span>
          <span className={styles.reviewCount}>({item.reviews})</span>
        </div>
      </div>
    </Link>
  )
}

export default function RelatedRangesSection() {
  const scrollRef = useRef(null)

  const scrollByCard = (direction) => {
    if (!scrollRef.current) return

    const firstCard = scrollRef.current.querySelector(`.${styles.card}`)
    const cardWidth = firstCard ? firstCard.getBoundingClientRect().width : 266
    scrollRef.current.scrollBy({
      left: direction * (cardWidth + 8),
      behavior: 'smooth',
    })
  }

  return (
    <section className={styles.section} id="pdp-related-ranges" data-analytics-id="pdp-related-ranges">
      <div className={styles.header}>
        <h2 className={styles.title}>SEE OTHER MIDNIGHT BLACK RANGES</h2>
        <div className={styles.controls}>
          <button
            type="button"
            className={styles.arrowButton}
            onClick={() => scrollByCard(-1)}
            aria-label="Scroll related products left"
          >
            <ArrowIcon direction="left" />
          </button>
          <button
            type="button"
            className={styles.arrowButton}
            onClick={() => scrollByCard(1)}
            aria-label="Scroll related products right"
          >
            <ArrowIcon direction="right" />
          </button>
        </div>
      </div>

      <div ref={scrollRef} className={styles.row}>
        {RELATED_RANGES_ITEMS.map(item => (
          <RelatedCard key={item.id} item={item} />
        ))}
      </div>
    </section>
  )
}
