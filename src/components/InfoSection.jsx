import styles from './InfoSection.module.css'
import FeatureRatings from './FeatureRatings'
import { FEATURE_RATINGS } from '../data/product'

const CaretRight = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
    <path d="M6 3L11 8L6 13" stroke="black" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

const StarIcon = () => (
  <svg width="10" height="10" viewBox="0 0 24 24" fill="#0a0a0a" stroke="none">
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
  </svg>
)

const LINKS = [
  { id: 'features', label: 'PRODUCT FEATURES' },
  { id: 'model',    label: 'MODEL SIZE' },
  { id: 'delivery', label: 'DELIVERY & RETURNS' },
]

export default function InfoSection({ onOpen, onOpenReviews }) {
  return (
    <div className={styles.section}>

      <div className={styles.block}>
        <p className={styles.description}>
          Make your IMPACT in our Longline Strappy Top. Twill knit underbust and waist for contouring support, with a halterneck, open back and built-in bra.{' '}
          <button className={styles.learnMore} onClick={() => onOpen('features')}>Learn more</button>
        </p>
      </div>

      <div className={styles.block}>
        <p className={styles.sectionLabel}>FEEL</p>
        <FeatureRatings ratings={FEATURE_RATINGS} />
      </div>

      <div className={styles.block}>
        <div className={styles.links}>
          {LINKS.map(link => (
            <button key={link.id} className={styles.linkRow} onClick={() => onOpen(link.id)}>
              <span className={styles.linkLabel}>{link.label}</span>
              <CaretRight />
            </button>
          ))}
          <button className={styles.linkRow} onClick={onOpenReviews}>
            <span className={styles.reviewLinkContent}>
              <span className={styles.linkLabel}>CUSTOMER REVIEWS</span>
              <span className={styles.reviewSubline}>
                Loved by 6,746 customers · 5.0 <StarIcon />
              </span>
            </span>
            <CaretRight />
          </button>
        </div>
      </div>

    </div>
  )
}
