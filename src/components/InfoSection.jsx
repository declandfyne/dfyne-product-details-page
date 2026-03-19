import styles from './InfoSection.module.css'
import FeatureRatings from './FeatureRatings'
import { FEATURE_RATINGS } from '../data/product'

const CaretRight = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
    <path d="M6 3L11 8L6 13" stroke="black" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

const LINKS = [
  { id: 'features', label: 'PRODUCT FEATURES' },
  { id: 'model',    label: 'MODEL SIZE' },
  { id: 'delivery', label: 'DELIVERY & RETURNS' },
]

export default function InfoSection({ onOpen }) {
  return (
    <div className={styles.section}>

      <div className={styles.block}>
        <p className={styles.sectionLabel}>ABOUT</p>
        <p className={styles.description}>
          Make your IMPACT in our Longline Strappy Top. Designed with a twill knit underbust and waist
          for contouring and support during every workout. The halterneck and open back is the perfect
          combo to show off your back day gains. Pair this Strappy Longline with the rest of the IMPACT
          range for the ultimate strong girl gym fit.
        </p>
      </div>

      <div className={styles.block}>
        <p className={styles.sectionLabel}>FEEL</p>
        <FeatureRatings ratings={FEATURE_RATINGS} />
      </div>

      <div className={styles.block}>
        <p className={styles.sectionLabel}>EXPLORE</p>
        <div className={styles.links}>
          {LINKS.map(link => (
            <button key={link.id} className={styles.linkRow} onClick={() => onOpen(link.id)}>
              <span className={styles.linkLabel}>{link.label}</span>
              <CaretRight />
            </button>
          ))}
        </div>
      </div>

    </div>
  )
}
