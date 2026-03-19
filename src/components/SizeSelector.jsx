import { SIZES } from '../data/product'
import styles from './SizeSelector.module.css'

export default function SizeSelector({ selectedId, onChange }) {
  return (
    <div className={styles.section}>
      <div className={styles.header}>
        <p className={styles.label}>
          SIZE: <strong>{selectedId?.toUpperCase()}</strong>
        </p>
        <button className={styles.guideBtn}>SIZE GUIDE</button>
      </div>
      <div className={styles.buttons}>
        {SIZES.map(size => (
          <button
            key={size.id}
            disabled={size.soldOut}
            onClick={() => !size.soldOut && onChange(size)}
            className={[
              styles.btn,
              selectedId === size.id && !size.soldOut ? styles.active : '',
              size.soldOut ? styles.soldOut : '',
            ].join(' ')}
            aria-label={size.soldOut ? `${size.label} – sold out` : size.label}
          >
            {size.label}
          </button>
        ))}
      </div>
    </div>
  )
}
