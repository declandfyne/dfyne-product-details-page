import styles from './V3InfoSection.module.css'
import FeatureRatings from './FeatureRatings'
import { FEATURE_RATINGS, REVIEW_RATINGS } from '../data/product'

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

export default function V3InfoSection({ onOpenDetails, onOpenReviews, featureLayout = 'button' }) {
  return (
    <div className={styles.section}>

      <div className={styles.block}>
        <p className={styles.description}>
          Make your IMPACT in our Longline Strappy Top. Twill knit underbust and waist for contouring support, with a halterneck, open back and built-in bra.
        </p>
      </div>

      {(featureLayout === 'standalone' || featureLayout === 'standalone-pills') && (
        <div className={styles.block}>
          <FeatureRatings ratings={FEATURE_RATINGS} variant={featureLayout === 'standalone-pills' ? 'pills' : 'default'} />
        </div>
      )}

      <button className={styles.detailsBtn} onClick={onOpenDetails}>
        <div className={styles.detailsBtnContent}>
          <span className={styles.detailsBtnLabel}>DETAILS & DELIVERY</span>
          <span className={styles.detailsBtnSub}>Features · Model & Sizing · Delivery & Returns</span>
        </div>
        <CaretRight />
      </button>

      <hr className={styles.divider} />

      <div className={styles.reviewSummary}>
        <p className={styles.sectionLabel}>CUSTOMER REVIEWS</p>

        <button className={styles.reviewScoreRow} onClick={onOpenReviews}>
          <span className={styles.reviewScoreBadge}>5.0</span>
          <span className={styles.reviewScoreText}>Excellent · 6,746 reviews</span>
          <CaretRight />
        </button>

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
          Read all reviews
        </button>
      </div>

    </div>
  )
}
