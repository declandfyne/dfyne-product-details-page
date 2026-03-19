import { ASSETS } from '../data/product'
import styles from './CartSection.module.css'

const CaretRight = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
    <path d="M6 3L11 8L6 13" stroke="black" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

export default function CartSection({ onOpenPayment }) {
  return (
    <div className={styles.section}>
      <button className={styles.addToCart}>ADD TO CART</button>

      <button className={styles.paymentBar} onClick={onOpenPayment}>
        <span className={styles.paymentText}>Split The Cost. Interest Free</span>
        <div className={styles.paymentLogos}>
          <img style={{ width: 47, height: 16, objectFit: 'contain' }} src={ASSETS.klarna}   alt="Klarna" />
          <img style={{ width: 47, height: 16, objectFit: 'contain' }} src={ASSETS.afterpay} alt="Afterpay" />
          <img style={{ width: 47, height: 16, objectFit: 'contain' }} src={ASSETS.shopPay}  alt="Shop Pay" />
        </div>
        <CaretRight />
      </button>

      <div className={styles.deliveryRow}>
        <div className={styles.deliveryInner}>
          <img className={styles.pkgIcon} src={ASSETS.package} alt="" />
          <span className={styles.deliveryText}>Free Tracked Delivery over £30</span>
        </div>
        <span className={styles.dot}>•</span>
        <span className={styles.returnsText}>60 day returns</span>
      </div>
    </div>
  )
}
