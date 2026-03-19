import { useEffect } from 'react'
import { ASSETS } from '../data/product'
import styles from './PaymentModal.module.css'

const PAYMENT_OPTIONS = [
  {
    id: 'klarna',
    logo: ASSETS.klarna,
    logoHeight: 20,
    logoAlt: 'Klarna',
    title: '3 interest-free payments',
    subtitle: '$9.75 every 2 weeks',
    amount: '£14.99',
    installments: 'x3',
  },
  {
    id: 'afterpay',
    logo: ASSETS.afterpay,
    logoHeight: 16,
    logoAlt: 'Afterpay',
    title: '4 interest-free payments',
    subtitle: '$4.75 every 2 weeks',
    amount: '£11.25',
    installments: 'x4',
  },
  {
    id: 'shoppay',
    logo: ASSETS.shopPay,
    logoHeight: 14,
    logoAlt: 'Shop Pay',
    title: '4 interest-free payments',
    subtitle: 'on orders over $50',
    amount: '£11.25',
    installments: 'x4',
  },
]

export default function PaymentModal({ open, onClose }) {
  // Close on Escape key
  useEffect(() => {
    if (!open) return
    const handler = (e) => { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [open, onClose])

  // Prevent body scroll while open
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  if (!open) return null

  return (
    <div className={styles.overlay} onClick={onClose} aria-modal="true" role="dialog">
      <div
        className={`${styles.sheet} ${open ? styles.sheetOpen : ''}`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Drag handle */}
        <div className={styles.handle} />

        {/* Header */}
        <div className={styles.header}>
          <h2 className={styles.title}>Split The Cost. Interest Free</h2>
          <button className={styles.closeBtn} onClick={onClose} aria-label="Close">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M5 5L15 15M15 5L5 15" stroke="#0a0a0a" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </button>
        </div>

        {/* Subtitle */}
        <p className={styles.subtitle}>
          Buy now, pay later with interest-free installments with any of these providers at checkout.
        </p>

        {/* Payment rows */}
        <div className={styles.options}>
          {PAYMENT_OPTIONS.map((opt) => (
            <div key={opt.id} className={styles.optionRow}>
              <div className={styles.optionLeft}>
                <div className={styles.logoWrap}>
                  <img
                    src={opt.logo}
                    alt={opt.logoAlt}
                    style={{
                      width: 47,
                      height: 'auto',
                      objectFit: 'contain',
                    }}
                  />
                </div>
                <div className={styles.optionInfo}>
                  <span className={styles.optionTitle}>{opt.title}</span>
                  <span className={styles.optionSubtitle}>{opt.subtitle}</span>
                </div>
              </div>
              <div className={styles.optionPrice}>
                <span className={styles.amount}>{opt.amount}</span>
                <span className={styles.installments}>{opt.installments}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <p className={styles.footer}>Select your preferred payment method at checkout</p>
      </div>
    </div>
  )
}
