import { ASSETS } from '../data/product'
import styles from './CartSection.module.css'

const ChevronDown = () => (
  <svg width="8" height="5" viewBox="0 0 8 5" fill="none">
    <path d="M1 1L4 4L7 1" stroke="black" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

export default function CartSection({ onOpenPayment }) {
  return (
    <div className={styles.section}>
      <button className={styles.addToCart}>ADD TO CART</button>

      <button className={styles.paymentBar} onClick={onOpenPayment}>
        <span className={styles.paymentText}>Split The Cost. Interest Free</span>
        <div className={styles.paymentLogos}>
          <img style={{ width: 47, height: 20, objectFit: 'contain' }} src={ASSETS.klarna}   alt="Klarna" />
          <img style={{ width: 47, height: 16,   objectFit: 'contain' }} src={ASSETS.afterpay} alt="Afterpay" />
          <img style={{ width: 47, height: 11,   objectFit: 'contain' }} src={ASSETS.shopPay}  alt="Shop Pay" />
        </div>
        <ChevronDown />
      </button>

      <div className={styles.deliveryRow}>
        <div className={styles.deliveryInner}>
          <img className={styles.pkgIcon} src={ASSETS.package} alt="" />
          <span className={styles.deliveryText}>Free Tracked Delivery over £30</span>
        </div>
        <ul>
          <li className={styles.returnsText}>60 day returns</li>
        </ul>
      </div>
    </div>
  )
}
