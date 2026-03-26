import DeliveryReturns from './components/DeliveryReturns'
import styles from './V3.module.css'

export default function V3() {
  return (
    <div className={styles.page}>
      <div className={styles.placeholder}>
        <p className={styles.label}>Version 3</p>
        <p className={styles.sub}>Visual / Editorial</p>
      </div>
      <DeliveryReturns />
    </div>
  )
}
