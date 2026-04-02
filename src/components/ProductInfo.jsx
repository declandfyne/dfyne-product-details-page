import styles from './ProductInfo.module.css'

export default function ProductInfo({ price = '£44.99', onOpenReviews, hideBreadcrumb = false }) {
  return (
    <div className={styles.info}>
      {!hideBreadcrumb && (
        <a href="#" className={styles.breadcrumb}>
          <svg width="10" height="10" viewBox="0 0 16 16" fill="none">
            <path d="M10 4L6 8L10 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          IMPACT COLLECTION
        </a>
      )}

      <p className={styles.collectionName}>Impact</p>

      <div className={styles.titleRow}>
        <p className={styles.name}>Bandeau Strappy Bra</p>
        <div className={styles.ratingRow}>
          <svg width="11.368" height="10.967" viewBox="0 0 14 14" fill="black">
            <path d="M7 1.5l1.4 2.8 3.1.45-2.25 2.2.53 3.1L7 8.5l-2.78 1.55.53-3.1L2.5 4.75l3.1-.45L7 1.5z" />
          </svg>
          <span className={styles.average}>5.0</span>
          <button className={styles.reviews} onClick={onOpenReviews}>(6746)</button>
        </div>
      </div>

      <p className={styles.price}>{price}</p>
    </div>
  )
}
