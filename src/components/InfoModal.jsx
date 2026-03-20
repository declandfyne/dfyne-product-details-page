import { useState, useEffect } from 'react'
import styles from './InfoModal.module.css'
import FeatureRatings from './FeatureRatings'
import { FEATURE_RATINGS } from '../data/product'

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


const HIGHLIGHTS = [
  'Built-in bra with removable cups & pads',
  'Twill knit underbust & waist for contouring',
  'Strappy halterneck with open back',
  'High scoop, incredibly soft feel',
  'Durable, shape-retaining fabric',
]

function FeaturesContent() {
  return (
    <div className={styles.content}>
      <p className={styles.tabTitle}>PRODUCT FEATURES</p>

      <p className={styles.text}>
        Make your IMPACT in our Longline Strappy Top. Designed with a twill knit underbust and waist
        for contouring and support during every workout. The halterneck and open back is the perfect
        combo to show off your back day gains.
      </p>

      <div className={styles.featSection}>
        <p className={styles.featSectionLabel}>FEEL</p>
        <FeatureRatings ratings={FEATURE_RATINGS} />
      </div>

      <div className={styles.featSection}>
        <p className={styles.featSectionLabel}>HIGHLIGHTS</p>
        <ul className={styles.bulletList}>
          {HIGHLIGHTS.map(h => (
            <li key={h} className={styles.bulletItem}>{h}</li>
          ))}
        </ul>
      </div>

      <div className={styles.featSection}>
        <p className={styles.featSectionLabel}>MATERIAL</p>
        <div className={styles.materialBar}>
          <div className={styles.materialFill} style={{ width: '90%' }}>
            <span className={styles.materialLabel}>90% Nylon</span>
          </div>
          <div className={styles.materialRemainder}>
            <span className={styles.materialLabel}>10% Elastane</span>
          </div>
        </div>
      </div>

      <div className={styles.fitCallout}>
        <p className={styles.fitCalloutTitle}>FIT GUIDE</p>
        <p className={styles.fitCalloutText}>
          <strong>Firm at True to Size.</strong> Size up for a more relaxed fit.
        </p>
      </div>
    </div>
  )
}

const MODEL_MEASUREMENTS = [
  { label: 'Model Height',   uk: '168 cm',  usa: '5\'6"' },
  { label: 'Model Hips',     uk: '101 cm',  usa: '40"'   },
  { label: 'Model Waist',    uk: '69 cm',   usa: '27"'   },
  { label: 'Model Bust',     uk: '81.5 cm', usa: '32"'   },
  { label: 'Model Cup Size', uk: 'B',       usa: 'B'     },
  { label: 'Dress Size',     uk: '8 - 10',  usa: '6 - 8' },
]

function ModelContent({ model, productImg }) {
  const EDITORIAL_STATS = [
    { value: '168 cm', label: 'HEIGHT' },
    { value: '8 – 10', label: 'UK DRESS' },
    { value: 'Cup B',  label: 'BUST' },
    { value: `Size ${model.size}`, label: 'WEARING' },
  ]

  return (
    <div className={styles.modelContent}>

      <p className={styles.tabTitle}>{model.name?.toUpperCase()}'S SIZE & FIT</p>

      <div className={styles.modelSideBySide}>
        {productImg && (
          <div className={styles.modelHeroSmall}>
            <img src={productImg} className={styles.modelHeroImg} alt={model.name} />
          </div>
        )}
        <div className={styles.editorialStatsStacked}>
          {EDITORIAL_STATS.map(({ value, label }) => (
            <div key={label} className={styles.editorialStatRow}>
              <span className={styles.editorialValue}>{value}</span>
              <span className={styles.editorialLabel}>{label}</span>
            </div>
          ))}
        </div>
      </div>

      <p className={styles.sizeWornNote}>
        {model.name} is wearing a <strong>Size {model.size}</strong> in this style.{' '}
        Fits <strong>firm at true to size</strong> — size up for a more relaxed fit.
      </p>

      <div className={styles.featSection}>
        <p className={styles.featSectionLabel}>FULL MEASUREMENTS</p>
        <div className={styles.modelTable}>
          <div className={`${styles.modelRow} ${styles.modelHeader}`}>
            <span className={styles.modelLabel} />
            <span className={styles.modelColHead}>UK</span>
            <span className={styles.modelColHead}>USA</span>
          </div>
          {MODEL_MEASUREMENTS.map(({ label, uk, usa }) => (
            <div key={label} className={styles.modelRow}>
              <span className={styles.modelLabel}>{label}</span>
              <span className={styles.modelValue}>{uk}</span>
              <span className={styles.modelValue}>{usa}</span>
            </div>
          ))}
        </div>
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

export default function InfoModal({ open, activeTab, onClose, model, productImg }) {
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
          {tab === 'features' && <FeaturesContent />}
          {tab === 'model'    && <ModelContent model={model} productImg={productImg} />}
          {tab === 'delivery' && <DeliveryContent />}
        </div>
      </div>
    </div>
  )
}
