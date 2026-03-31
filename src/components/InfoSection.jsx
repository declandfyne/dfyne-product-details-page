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
    <div className={styles.section}>

      <div className={`${styles.block} ${styles.productDetailsBlock}`}>
        <p className={styles.sectionLabel}>PRODUCT DETAILS</p>
        <p className={styles.description}>
          Make your IMPACT in our Bandeau Strappy Bra. Twill knit underbust and waist for contouring support, with a halterneck, open back and built-in bra.
        </p>
          <FeatureRatings ratings={FEATURE_RATINGS} variant={featureLayout === 'standalone-pills' ? 'pills' : featureVariant} />
          <ul className={styles.featureBulletList}>
            {FEATURE_BULLETS.map(item => (
              <li key={item} className={styles.featureBulletItem}>{item}</li>
            ))}
          </ul>
      </div>

      <div className={styles.block}>
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
      </div>

      <div className={styles.sectionDivider} aria-hidden="true" />

      <CompleteLook onOpen={onOpenCompleteLook} onOpenItem={onOpenCompleteLookItem} embedded />

    </div>
  )
}
