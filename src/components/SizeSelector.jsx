import { SIZES } from '../data/product'
import styles from './SizeSelector.module.css'

export default function SizeSelector({ selectedId, onChange }) {
  return (
    <section className={styles.section} id="pdp-size-selector" data-analytics-id="pdp-size-selector">
      <div className={styles.header} id="pdp-size-header" data-analytics-id="pdp-size-header">
        <p className={styles.label} id="pdp-size-label" data-analytics-id="pdp-size-label">
          SIZE: <strong>{selectedId?.toUpperCase()}</strong>
        </p>
        <button className={styles.guideBtn} id="pdp-size-guide" data-analytics-id="pdp-size-guide">SIZE GUIDE</button>
      </div>
      <div className={styles.buttons} id="pdp-size-options" data-analytics-id="pdp-size-options">
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
            id={`pdp-size-${size.id}`}
            data-analytics-id="pdp-size-button"
            data-size-id={size.id}
            data-size-label={size.label}
            data-sold-out={size.soldOut}
            data-selected={selectedId === size.id && !size.soldOut}
          >
            {size.label}
          </button>
        ))}
      </div>
      <div className={styles.fitCallout} id="pdp-fit-callout" data-analytics-id="pdp-fit-callout">
        <p className={styles.fitCalloutText}>
          <span className={styles.fitCalloutBold}>Firm at True to Size.&nbsp;</span>
          <span className={styles.fitCalloutRegular}>Size up for a more relaxed fit.</span>
        </p>
      </div>
    </section>
  )
}
