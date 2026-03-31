import styles from './InfoSection.module.css'
import FeatureRatings from './FeatureRatings'
import CompleteLook from './CompleteLook'
import { FEATURE_RATINGS, REVIEW_RATINGS } from '../data/product'

const CaretDown = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
    <path d="M3 6L8 11L13 6" stroke="black" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

const StarIcon = () => (
  <svg width="10" height="10" viewBox="0 0 24 24" fill="#0a0a0a" stroke="none">
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
  </svg>
)

const ReviewChevron = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
    <path d="M6 4L10 8L6 12" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

const LINKS = [
  { id: 'features', label: 'PRODUCT DETAILS' },
  { id: 'model',    label: 'MODEL SIZE' },
  { id: 'delivery', label: 'DELIVERY & RETURNS' },
]

const FEATURE_BULLETS = [
  'Built-in bra with removable cups & pads',
  'Twill knit underbust & waist for contouring',
  'Strappy halterneck with open back',
  'High scoop, incredibly soft feel',
  'Durable, shape-retaining fabric',
]

export default function InfoSection({ onOpen, onOpenReviews, onOpenCompleteLook, featureLayout = 'button', featureVariant = 'default' }) {
  return (
    <div className={styles.section}>

      <div className={styles.block}>
        <p className={styles.sectionLabel}>PRODUCT DETAILS</p>
        <p className={styles.description}>
          Make your IMPACT in our Bandeau Strappy Bra. Twill knit underbust and waist for contouring support, with a halterneck, open back and built-in bra.
        </p>
      </div>

      {((featureLayout === 'standalone' || featureLayout === 'standalone-pills') || featureLayout === 'button') && (
        <div className={`${styles.block} ${styles.featureBulletBlock}`}>
          {(featureLayout === 'standalone' || featureLayout === 'standalone-pills') && (
            <FeatureRatings ratings={FEATURE_RATINGS} variant={featureLayout === 'standalone-pills' ? 'pills' : featureVariant} />
          )}
          <ul className={styles.featureBulletList}>
            {FEATURE_BULLETS.map(item => (
              <li key={item} className={styles.featureBulletItem}>{item}</li>
            ))}
          </ul>
        </div>
      )}

      <div className={`${styles.block} ${styles.completeLookBlock}`}>
        <div className={styles.links}>
          <button className={styles.linkRow} onClick={() => onOpen('features')}>
            <span className={styles.linkLabel}>FULL DETAILS</span>
            <CaretDown />
          </button>
          {LINKS.filter(link => link.id !== 'features').map(link => (
            <button key={link.id} className={styles.linkRow} onClick={() => onOpen(link.id)}>
              <span className={styles.linkLabel}>{link.label}</span>
              <CaretDown />
            </button>
          ))}
        </div>

        <CompleteLook onOpen={onOpenCompleteLook} embedded />
      </div>

      <div className={styles.reviewSection}>
        <p className={styles.reviewTitle}>CUSTOMER REVIEWS</p>

        <button type="button" className={styles.reviewScoreRow} onClick={onOpenReviews}>
          <span className={styles.reviewScoreSummary}>
            <span className={styles.reviewScoreBadge}>5.0</span>
            <span className={styles.reviewScoreText}>Excellent · 6,746 reviews</span>
          </span>
          <ReviewChevron />
        </button>

        <div className={styles.reviewBoxContent}>
          <div className={styles.reviewBars}>
            {REVIEW_RATINGS.map(({ label, value }) => (
              <div key={label} className={styles.reviewBarItem}>
                <span className={styles.reviewBarLabel}>{label}</span>
                <div className={styles.reviewBarTrack}>
                  <div className={styles.reviewBarFill} style={{ width: `${value}%` }} />
                </div>
              </div>
            ))}
          </div>

          <button className={styles.readAllLink} onClick={onOpenReviews}>
            Read all customer reviews
          </button>
        </div>
      </div>

    </div>
  )
}
