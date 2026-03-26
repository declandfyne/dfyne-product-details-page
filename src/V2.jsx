import DeliveryReturns from './components/DeliveryReturns'
import styles from './V2.module.css'

export default function V2() {
  return (
    <div className={styles.page}>
      <div className={styles.placeholder}>
        <p className={styles.label}>Version 2</p>
        <p className={styles.sub}>Sticky Cart / Streamlined</p>
      </div>
      <DeliveryReturns />
    </div>
  )
}
