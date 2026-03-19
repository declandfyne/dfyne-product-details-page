import { useState, useEffect } from 'react'
import styles from './InfoModal.module.css'

const CloseIcon = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
    <path d="M1 1L13 13M13 1L1 13" stroke="#0a0a0a" strokeWidth="1.4" strokeLinecap="round" />
  </svg>
)

const TABS = [
  { id: 'features',  label: 'PRODUCT FEATURES' },
  { id: 'model',     label: 'MODEL SIZE' },
  { id: 'delivery',  label: 'DELIVERY & RETURNS' },
]

function FeaturesContent() {
  return (
    <div className={styles.content}>
      <p className={styles.tabTitle}>PRODUCT FEATURES</p>
      <p className={styles.text}>
        Make your IMPACT in our Longline Strappy Top. Designed with a twill knit underbust and waist
        for contouring and support during every workout. The halterneck and open back is the perfect
        combo to show off your back day gains. Pair this Strappy Longline with the rest of the IMPACT
        range for the ultimate strong girl gym fit.
      </p>
      <ul className={styles.featureList}>
        <li>Removable cups (great!)</li>
        <li>Strappy halterneck</li>
        <li>High scoop, durable fabric</li>
        <li>Incredibly soft feel</li>
        <li>Built-in bra with removable pads</li>
        <li>Twill knit underbust and waist for contouring</li>
        <li>90% Nylon | 10% Elastane</li>
        <li><strong>Fit – Firm at True to Size;</strong> Size up for a more relaxed fit</li>
      </ul>
    </div>
  )
}

const MODEL_ROWS = [
  { label: 'Model Height',   uk: '168 cm',  usa: '5\'6"' },
  { label: 'Model Hips',     uk: '101 cm',  usa: '40"'   },
  { label: 'Model Waist',    uk: '69 cm',   usa: '27"'   },
  { label: 'Model Bust',     uk: '81.5 cm', usa: '32"'   },
  { label: 'Model Cup Size', uk: 'B',       usa: 'B'     },
  { label: 'Dress Size',     uk: '8 - 10',  usa: '6 - 8' },
]

function ModelContent() {
  return (
    <div className={styles.content}>
      <p className={styles.tabTitle}>MODEL SIZE</p>
      <div className={styles.modelTable}>
        <div className={`${styles.modelRow} ${styles.modelHeader}`}>
          <span className={styles.modelLabel} />
          <span className={styles.modelColHead}>UK</span>
          <span className={styles.modelColHead}>USA</span>
        </div>
        {MODEL_ROWS.map(({ label, uk, usa }) => (
          <div key={label} className={styles.modelRow}>
            <span className={styles.modelLabel}>{label}</span>
            <span className={styles.modelValue}>{uk}</span>
            <span className={styles.modelValue}>{usa}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

const SHIPPING_ROWS = [
  { region: 'Mainland USA', time: '1-3 Working Days',   cost: '$4.99',      free: '$65'      },
  { region: 'Canada',       time: '2-5 Working Days',   cost: '$9.99 CAD',  free: '$88 CAD'  },
  { region: 'UK',           time: '1 Working Day',      cost: '£1.99',      free: '£30'      },
  { region: 'Australia',    time: '3-5 Working Days',   cost: '$7.99 AUD',  free: '$100 AUD' },
  { region: 'EU',           time: '1-3 Working Days',   cost: '€4.95',      free: '€74.95'   },
  { region: 'Rest of World',time: '4-19 Working Days',  cost: '$29.99',     free: '–'        },
]

function DeliveryContent() {
  return (
    <div className={styles.content}>
      <p className={styles.tabTitle}>DELIVERY & RETURNS</p>
      <p className={styles.text}>
        We offer free returns for all orders from the UK, Mainland USA, Canada, EU, and Australia. See more here.
      </p>
      <p className={styles.text}>
        Express shipping is our standard.
      </p>
      <p className={styles.text}>
        For tracked shipments, your tracking information will be included in your shipping confirmation email.
        You can also log into your account and hit 'view my order' to find your tracking information once the order has been dispatched.
      </p>
      <p className={styles.text}>
        You can also use our tracking portal here to track your order.
      </p>
      <p className={styles.text}>
        All orders made before 3pm GMT Monday – Friday will be dispatched same day.
      </p>

      <div className={styles.shippingTable}>
        <div className={styles.shippingHeader}>
          <span>Region</span>
          <span>Delivery Time</span>
          <span>Cost</span>
          <span>Free From</span>
        </div>
        {SHIPPING_ROWS.map(({ region, time, cost, free }) => (
          <div key={region} className={styles.shippingRow}>
            <span>{region}</span>
            <span>{time}</span>
            <span>{cost}</span>
            <span>{free}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

const TAB_CONTENT = {
  features: <FeaturesContent />,
  model:    <ModelContent />,
  delivery: <DeliveryContent />,
}

export default function InfoModal({ open, activeTab, onClose }) {
  const [tab, setTab] = useState(activeTab || 'features')

  useEffect(() => {
    if (activeTab) setTab(activeTab)
  }, [activeTab])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  if (!open) return null

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.sheet} onClick={e => e.stopPropagation()}>
        <div className={styles.header}>
          <button className={styles.closeBtn} onClick={onClose} aria-label="Close">
            <CloseIcon />
          </button>
        </div>

        <div className={styles.tabs}>
          {TABS.map(t => (
            <button
              key={t.id}
              className={`${styles.tab} ${tab === t.id ? styles.tabActive : ''}`}
              onClick={() => setTab(t.id)}
            >
              {t.label}
            </button>
          ))}
        </div>

        <div className={styles.body}>
          {TAB_CONTENT[tab]}
        </div>
      </div>
    </div>
  )
}
