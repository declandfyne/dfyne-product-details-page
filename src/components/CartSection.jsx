import { ASSETS } from '../data/product'
import styles from './CartSection.module.css'

const ChevronDown = () => (
  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
    <path d="M2 4L6 8L10 4" stroke="black" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

export default function CartSection({ onOpenPayment }) {
  return (
    <div className={styles.section}>
      <button className={styles.addToCart}>ADD TO CART</button>

      <button className={styles.paymentBar} onClick={onOpenPayment}>
        <span className={styles.paymentText}>BUY NOW, PAY LATER</span>
        <ChevronDown />
        <div className={styles.paymentLogos}>
          <img style={{ width: 40, height: 14, objectFit: 'contain' }} src={ASSETS.klarna}   alt="Klarna" />
          <img style={{ width: 40, height: 14, objectFit: 'contain' }} src={ASSETS.afterpay} alt="Afterpay" />
          <img style={{ width: 40, height: 14, objectFit: 'contain' }} src={ASSETS.shopPay}  alt="Shop Pay" />
        </div>
      </button>

      <div className={styles.deliveryRow}>
        <div className={styles.deliveryInner}>
          <img className={styles.pkgIcon} src={ASSETS.package} alt="" />
          <span className={styles.deliveryText}>Free Tracked Delivery over £30</span>
        </div>
        <span className={styles.dot}> • </span>
        <span className={styles.returnsText}>60 day returns</span>
      </div>
    </div>
  )
}
