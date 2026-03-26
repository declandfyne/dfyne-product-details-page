import styles from './DeliveryReturns.module.css'

export default function DeliveryReturns() {
  return (
    <div className={styles.row}>
      <div className={styles.item}>
        <svg className={styles.icon} width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#555" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M16.5 9.4l-9-5.19M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 002 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z" />
          <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
          <line x1="12" y1="22.08" x2="12" y2="12" />
        </svg>
        <span className={styles.text}>Free Tracked Delivery over £30</span>
      </div>
      <span className={styles.dot}> • </span>
      <div className={styles.item}>
        <svg className={styles.icon} width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#555" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="1 4 1 10 7 10" />
          <path d="M3.51 15a9 9 0 1 0 2.13-9.36L1 10" />
        </svg>
        <span className={styles.text}>60 day returns</span>
      </div>
    </div>
  )
}
