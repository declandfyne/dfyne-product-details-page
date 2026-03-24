import styles from './FeatureRatings.module.css'

function RatingDots({ value, max = 5 }) {
  return (
    <div className={styles.dots}>
      {Array.from({ length: max }, (_, i) => (
        <div
          key={i}
          className={`${styles.dot} ${i < value ? styles.dotFilled : styles.dotEmpty}`}
        />
      ))}
    </div>
  )
}

export default function FeatureRatings({ ratings, compact = false, variant = 'default' }) {
  const cls = [styles.wrap, compact ? styles.compact : '', variant === 'pills' ? styles.pills : ''].filter(Boolean).join(' ')
  return (
    <div className={cls}>
      <div className={styles.list}>
        {ratings.map(({ label, value }) => (
          <div key={label} className={styles.item}>
            <RatingDots value={value} />
            <span className={styles.label}>{label}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
