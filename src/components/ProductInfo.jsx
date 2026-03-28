import styles from './ProductInfo.module.css'
import FeatureRatings from './FeatureRatings'
import { FEATURE_RATINGS } from '../data/product'

export default function ProductInfo({ price = '£44.99', onOpenReviews, showFeatures = false }) {
  return (
    <div className={styles.info}>
      <p className={styles.brand}>IMPACT</p>
      <p className={styles.name}>Bandeau Strappy Bra</p>
      <p className={styles.price}>{price}</p>
      <div className={styles.ratingRow}>
        <svg width="11.368" height="10.967" viewBox="0 0 14 14" fill="black">
          <path d="M7 1.5l1.4 2.8 3.1.45-2.25 2.2.53 3.1L7 8.5l-2.78 1.55.53-3.1L2.5 4.75l3.1-.45L7 1.5z" />
        </svg>
        <span className={styles.average}>5.0</span>
        <button className={styles.reviews} onClick={onOpenReviews}>(6746)</button>
      </div>
      {showFeatures && (
        <div className={styles.featuresBox}>
          <FeatureRatings ratings={FEATURE_RATINGS} />
        </div>
      )}
    </div>
  )
}
