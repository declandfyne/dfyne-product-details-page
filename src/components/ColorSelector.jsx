import { COLORS } from '../data/product'
import styles from './ColorSelector.module.css'

export default function ColorSelector({ selectedId, onChange }) {
  return (
    <div className={styles.section}>
      <p className={styles.label}>COLOR:</p>
      <div className={styles.swatches}>
        {COLORS.map(color => (
          <button
            key={color.id}
            className={`${styles.swatch} ${selectedId === color.id ? styles.active : ''}`}
            onClick={() => onChange(color)}
            aria-label={color.name}
          >
            <div className={styles.imgWrap}>
              <img src={color.img} alt={color.label} />
              {color.isNew && <span className={styles.newBadge}>NEW</span>}
            </div>
            <div className={styles.swatchName}>{color.label}</div>
          </button>
        ))}
      </div>
    </div>
  )
}
