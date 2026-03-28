import { useState, useEffect, useRef } from 'react'
import { ASSETS } from '../data/product'
import styles from './CartSection.module.css'

const ChevronDown = () => (
  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
    <path d="M2 4L6 8L10 4" stroke="black" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

export default function CartSection({ onOpenPayment }) {
  const btnRef = useRef(null)
  const [showSticky, setShowSticky] = useState(false)

  useEffect(() => {
    const el = btnRef.current
    if (!el) return
    // Only enable on mobile (< 1024px)
    const mq = window.matchMedia('(max-width: 1023px)')
    if (!mq.matches) return

    const observer = new IntersectionObserver(
      ([entry]) => setShowSticky(!entry.isIntersecting),
      { threshold: 0 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <div className={styles.section}>
      <button ref={btnRef} className={styles.addToCart}>ADD TO CART</button>

      {showSticky && (
        <div className={styles.stickyBar}>
          <button className={styles.stickyAddToCart}>ADD TO CART</button>
        </div>
      )}

      <button className={styles.paymentBar} onClick={onOpenPayment}>
        <span className={styles.paymentText}>Split The Cost. Interest Free</span>
        <div className={styles.paymentLogos}>
          <img style={{ width: 47, height: 20, objectFit: 'contain' }} src={ASSETS.klarna}   alt="Klarna" />
          <img style={{ width: 47, height: 16, objectFit: 'contain' }} src={ASSETS.afterpay} alt="Afterpay" />
          <img style={{ width: 47, height: 11, objectFit: 'contain' }} src={ASSETS.shopPay}  alt="Shop Pay" />
        </div>
        <ChevronDown />
      </button>

      <div className={styles.deliveryRow}>
        <div className={styles.deliveryInner}>
          <svg className={styles.pkgIcon} width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#555" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M16.5 9.4l-9-5.19M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 002 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z" />
            <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
            <line x1="12" y1="22.08" x2="12" y2="12" />
          </svg>
          <span className={styles.deliveryText}>Free Tracked Delivery over £30</span>
        </div>
        <span className={styles.divider} />
        <div className={styles.deliveryInner}>
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#555" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="1 4 1 10 7 10" />
            <path d="M3.51 15a9 9 0 1 0 2.13-9.36L1 10" />
          </svg>
          <span className={styles.returnsText}>60 day returns</span>
        </div>
      </div>
    </div>
  )
}
