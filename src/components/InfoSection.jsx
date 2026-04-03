import styles from './InfoSection.module.css'
import FeatureRatings from './FeatureRatings'
import CompleteLook from './CompleteLook'
import { FEATURE_RATINGS } from '../data/product'

const CaretDown = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
    <path d="M3 6L8 11L13 6" stroke="black" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
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

export default function InfoSection({ onOpen, onOpenCompleteLook, onOpenCompleteLookItem, featureLayout = 'button', featureVariant = 'default' }) {
  return (
    <section className={styles.section} id="pdp-details-section" data-analytics-id="pdp-details-section">

      <div className={`${styles.block} ${styles.productDetailsBlock}`} id="pdp-product-details" data-analytics-id="pdp-product-details">
        <p className={styles.sectionLabel} id="pdp-product-details-heading" data-analytics-id="pdp-product-details-heading">PRODUCT DETAILS</p>
        <p className={styles.description} id="pdp-product-description" data-analytics-id="pdp-product-description">
          Make your IMPACT in our Bandeau Strappy Bra. Twill knit underbust and waist for contouring support, with a halterneck, open back and built-in bra.
        </p>
          <div id="pdp-feature-ratings" data-analytics-id="pdp-feature-ratings">
            <FeatureRatings ratings={FEATURE_RATINGS} variant={featureLayout === 'standalone-pills' ? 'pills' : featureVariant} />
          </div>
          <ul className={styles.featureBulletList} id="pdp-feature-bullets" data-analytics-id="pdp-feature-bullets">
            {FEATURE_BULLETS.map(item => (
              <li key={item} className={styles.featureBulletItem} data-analytics-id="pdp-feature-bullet">{item}</li>
            ))}
          </ul>
      </div>

      <div className={styles.block} id="pdp-detail-links" data-analytics-id="pdp-detail-links">
        <div className={styles.links}>
          <button className={styles.linkRow} onClick={() => onOpen('features')} id="pdp-open-full-details" data-analytics-id="pdp-open-full-details">
            <span className={styles.linkLabel}>FULL DETAILS</span>
            <CaretDown />
          </button>
          {LINKS.filter(link => link.id !== 'features').map(link => (
            <button key={link.id} className={styles.linkRow} onClick={() => onOpen(link.id)} id={`pdp-open-${link.id}`} data-analytics-id="pdp-detail-link" data-detail-tab={link.id}>
              <span className={styles.linkLabel}>{link.label}</span>
              <CaretDown />
            </button>
          ))}
        </div>
      </div>

      <div className={styles.sectionDivider} aria-hidden="true" />

      <CompleteLook onOpen={onOpenCompleteLook} onOpenItem={onOpenCompleteLookItem} embedded />

    </section>
  )
}
