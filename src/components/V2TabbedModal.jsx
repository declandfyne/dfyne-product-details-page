import { useState, useEffect, useRef, useCallback } from 'react'
import FeatureRatings from './FeatureRatings'
import { FEATURE_RATINGS, ASSETS } from '../data/product'
import useDragToDismiss from '../hooks/useDragToDismiss'
import styles from './V2TabbedModal.module.css'

const TABS = [
  { id: 'features', label: 'PRODUCT FEATURES' },
  { id: 'model',    label: 'MODEL SIZE' },
  { id: 'delivery', label: 'DELIVERY & RETURNS' },
]

const CloseIcon = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
    <path d="M1 1L13 13M13 1L1 13" stroke="#0a0a0a" strokeWidth="1.4" strokeLinecap="round" />
  </svg>
)

const HIGHLIGHTS = [
  'Built-in bra with removable cups & pads',
  'Twill knit underbust & waist for contouring',
  'Strappy halterneck with open back',
  'High scoop, incredibly soft feel',
  'Durable, shape-retaining fabric',
]

const CARE_INSTRUCTIONS = [
  'Machine wash cold, inside out — gentle/delicates cycle, mesh bag recommended.',
  'Mild detergent only — no fabric softener, no bleach.',
  'Air dry flat — away from direct heat and sunlight.',
  'No tumble dryer, no iron, no dry cleaning.',
  'Rinse in cold water after workouts if you can\'t wash straight away.',
]

function FeaturesContent() {
  return (
    <div className={styles.content}>
      <p className={styles.text}>
        Make your IMPACT in our Bandeau Strappy Bra — built for women who train hard and want to look the part doing it. Designed to contour and support your core through every rep, squat and set while keeping you cool and confident.
      </p>

      <div className={styles.featSection}>
        <p className={styles.featSectionLabel}>FEATURES</p>
        <ul className={styles.bulletList}>
          {HIGHLIGHTS.map(h => (
            <li key={h} className={styles.bulletItem}>{h}</li>
          ))}
        </ul>
      </div>

      <div className={styles.featSection}>
        <p className={styles.featSectionLabel}>MATERIAL COMPOSITION</p>
        <div className={styles.materialBar}>
          <div className={styles.materialFill} style={{ width: '90%' }}>
            <span className={styles.materialLabel}>90% Nylon</span>
          </div>
          <div className={styles.materialRemainder}>
            <span className={styles.materialLabelDark}>10% Elastane</span>
          </div>
        </div>
      </div>

      <div className={styles.featSection}>
        <p className={styles.featSectionLabel}>CARE INSTRUCTIONS</p>
        <ul className={styles.bulletList}>
          {CARE_INSTRUCTIONS.map(item => (
            <li key={item} className={styles.bulletItem}>{item}</li>
          ))}
        </ul>
      </div>

      <div className={styles.shopBtns}>
        <a href="#" className={styles.shopBtn}>Shop All Impact Sports Bras</a>
        <a href="#" className={styles.shopBtn}>Shop All Sports Bras</a>
      </div>
    </div>
  )
}

const MODEL_MEASUREMENTS = [
  { label: 'Height',   cm: '168',  imperial: '5\'6"' },
  { label: 'Hips',     cm: '101',  imperial: '40"'   },
  { label: 'Waist',    cm: '69',   imperial: '27"'   },
  { label: 'Bust',     cm: '81.5', imperial: '32"'   },
  { label: 'Cup Size', cm: 'B',    imperial: 'B'     },
]

const REGIONAL_SIZES = [
  { region: 'UK',  size: '8 – 10' },
  { region: 'US',  size: '4 – 6'  },
  { region: 'EU',  size: '36 – 38' },
  { region: 'AU',  size: '8 – 10' },
]

const getDefaultUnit = () => {
  const lang = navigator.language || ''
  const imperialLocales = ['en-US', 'en-LR', 'en-MM']
  return imperialLocales.some(l => lang.startsWith(l)) ? 'imperial' : 'metric'
}

const RulerIcon = () => (
  <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
    <path d="M14.5 4.5L11.5 1.5L1.5 11.5L4.5 14.5L14.5 4.5Z" stroke="#0a0a0a" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M10 3L11.5 4.5" stroke="#0a0a0a" strokeWidth="1.3" strokeLinecap="round" />
    <path d="M7.5 5.5L9 7" stroke="#0a0a0a" strokeWidth="1.3" strokeLinecap="round" />
    <path d="M5 8L6.5 9.5" stroke="#0a0a0a" strokeWidth="1.3" strokeLinecap="round" />
    <path d="M2.5 10.5L4 12" stroke="#0a0a0a" strokeWidth="1.3" strokeLinecap="round" />
  </svg>
)

function ModelContent({ model }) {
  const [unit, setUnit] = useState(getDefaultUnit)

  const EDITORIAL_STATS = unit === 'metric' ? [
    { value: '168 cm', label: 'HEIGHT' },
    { value: 'Cup B',  label: 'BUST' },
    { value: '8 – 10', label: 'UK DRESS' },
    { value: `Size ${model.size}`, label: 'WEARING' },
  ] : [
    { value: '5\'6"', label: 'HEIGHT' },
    { value: 'Cup B',  label: 'BUST' },
    { value: '4 – 6', label: 'US DRESS' },
    { value: `Size ${model.size}`, label: 'WEARING' },
  ]

  return (
    <div className={styles.content}>
      <button className={styles.findSizeBtn} onClick={() => { /* Fitanalytics integration */ }}>
        <span className={styles.findSizeBtnIcon}><RulerIcon /></span>
        FIND MY SIZE
      </button>

      <div className={styles.modelSideBySide}>
        <div className={styles.modelHeroSmall}>
          <img src={ASSETS.modelPhoto} className={styles.modelHeroImg} alt={model.name} />
          <div className={styles.unitToggleOverlay}>
            <button
              className={`${styles.unitBtn} ${unit === 'metric' ? styles.unitBtnActive : ''}`}
              onClick={() => setUnit('metric')}
            >
              CM
            </button>
            <button
              className={`${styles.unitBtn} ${unit === 'imperial' ? styles.unitBtnActive : ''}`}
              onClick={() => setUnit('imperial')}
            >
              IN
            </button>
          </div>
        </div>
        <div className={styles.modelInfoRight}>
          <p className={styles.modelName}>ALEIAH'S MEASUREMENTS</p>
          <p className={styles.modelWearing}>Wearing Size {model.size}</p>
          <div className={styles.modelTableCompact}>
            {MODEL_MEASUREMENTS.map(({ label, cm, imperial }) => (
              <div key={label} className={styles.modelRowCompact}>
                <span className={styles.modelLabelCompact}>{label}</span>
                <span className={styles.modelValueCompact}>{unit === 'metric' ? cm : imperial}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className={styles.dressSection}>
        <p className={styles.modelName}>DRESS SIZE CONVERSIONS</p>
        <div className={styles.modelTableCompact}>
          {REGIONAL_SIZES.map(({ region, size }) => (
            <div key={region} className={styles.modelRowCompact}>
              <span className={styles.modelLabelCompact}>{region}</span>
              <span className={styles.modelValueCompact}>{size}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

const SHIPPING_ROWS = [
  { region: 'Mainland USA',  time: '1-3 Working Days',  cost: '$4.99',     free: '$65'      },
  { region: 'Canada',        time: '2-5 Working Days',  cost: '$9.99 CAD', free: '$88 CAD'  },
  { region: 'UK',            time: '1 Working Day',     cost: '£1.99',     free: '£30'      },
  { region: 'Australia',     time: '3-5 Working Days',  cost: '$7.99 AUD', free: '$100 AUD' },
  { region: 'EU',            time: '1-3 Working Days',  cost: '€4.95',     free: '€74.95'   },
  { region: 'Rest of World', time: '4-19 Working Days', cost: '$29.99',    free: '–'        },
]

function DeliveryContent() {
  return (
    <div className={styles.content}>
      <p className={styles.text}>
        We offer <strong>free returns</strong> for all orders from the UK, Mainland USA, Canada, EU, and Australia. See more <u>here</u>.
      </p>
      <p className={styles.text}>
        <strong>Express shipping is our standard</strong>
      </p>
      <p className={styles.text}>
        For tracked shipments, your tracking information will be included in your shipping confirmation email. You can also log into your account and hit '<em>view my order</em>' to find your tracking information once the order has been dispatched.
      </p>
      <p className={styles.text}>
        You can also use our <u>tracking portal here</u> to track your order.
      </p>
      <p className={styles.text}>
        All orders made before <strong><u>3pm GMT Monday – Friday</u></strong> will be dispatched same day.
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

      <a href="/contact" className={styles.contactBtn}>Contact Us</a>
    </div>
  )
}

const StarIcon = ({ filled }) => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill={filled ? '#0a0a0a' : 'none'} stroke="#0a0a0a" strokeWidth="1.5">
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
  </svg>
)

function Stars({ count }) {
  return (
    <div className={styles.stars}>
      {[1, 2, 3, 4, 5].map(i => (
        <StarIcon key={i} filled={i <= count} />
      ))}
    </div>
  )
}

const MOCK_REVIEWS = [
  { name: 'Reyna V.', verified: true, location: 'United States', date: '14/01/2026', stars: 5, title: 'Love this jacket!', scores: { quality: 100, sizing: 74, fit: 74 } },
  { name: 'Sophie L.', verified: true, location: 'United Kingdom', date: '09/01/2026', stars: 5, title: 'Best workout top I own', scores: { quality: 95, sizing: 50, fit: 60 } },
  { name: 'Megan T.', verified: true, location: 'Canada', date: '02/01/2026', stars: 5, title: 'Super cute, runs a little small', scores: { quality: 90, sizing: 85, fit: 80 } },
  { name: 'Aisha K.', verified: true, location: 'Australia', date: '28/12/2025', stars: 5, title: 'Incredibly soft fabric', scores: null },
  { name: 'Emma R.', verified: true, location: 'United Kingdom', date: '20/12/2025', stars: 5, title: 'Perfect for the gym and brunch after', scores: { quality: 100, sizing: 50, fit: 55 } },
  { name: 'Chloe B.', verified: false, location: 'Ireland', date: '15/12/2025', stars: 5, title: 'Great quality, wished it came in more colours', scores: null },
  { name: 'Jasmine P.', verified: true, location: 'United States', date: '10/12/2025', stars: 5, title: 'The built-in bra is a game changer', scores: { quality: 100, sizing: 55, fit: 65 } },
  { name: 'Nina W.', verified: true, location: 'Germany', date: '05/12/2025', stars: 5, title: 'Flattering fit, holds everything in place', scores: null },
  { name: 'Olivia D.', verified: true, location: 'Canada', date: '28/11/2025', stars: 5, title: 'Ordered two more after my first', scores: { quality: 95, sizing: 50, fit: 50 } },
  { name: 'Priya S.', verified: true, location: 'United Kingdom', date: '20/11/2025', stars: 5, title: 'Washes beautifully, no shape loss', scores: null },
]

const AGGREGATE_SCORES = { quality: 95, sizing: 78, fit: 72 }

function ReviewScores({ scores }) {
  const items = [
    { label: 'Product Quality', low: 'Not as expected', high: 'Incredible', value: scores.quality },
    { label: 'Sizing', low: 'Size Down', high: 'Size Up', value: scores.sizing },
    { label: 'Fit', low: 'Loose', high: 'Tight', value: scores.fit },
  ]
  return (
    <div className={styles.scoresGrid}>
      {items.map(({ label, low, high, value }) => (
        <div key={label} className={styles.scoreItem}>
          <span className={styles.scoreLabel}>{label}:</span>
          <div className={styles.scoreTrack}>
            <div className={styles.scoreFill} style={{ width: `${value}%` }} />
          </div>
          <div className={styles.scoreEnds}>
            <span>{low}</span>
            <span>{high}</span>
          </div>
        </div>
      ))}
    </div>
  )
}

function ReviewCard({ review }) {
  return (
    <div className={styles.reviewCard}>
      <div className={styles.cardHeader}>
        <div className={styles.avatar}>
          <svg width="21" height="21" viewBox="0 0 24 24" fill="none" stroke="#888" strokeWidth="1.5">
            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
            <circle cx="12" cy="7" r="4" />
          </svg>
        </div>
        <div className={styles.userInfo}>
          <div className={styles.nameRow}>
            <span className={styles.userName}>{review.name}</span>
            {review.verified && <span className={styles.verifiedBadge}>Verified</span>}
          </div>
          <span className={styles.userLocation}>{review.location}</span>
        </div>
      </div>
      <div className={styles.ratingRow}>
        <Stars count={review.stars} />
        <span className={styles.reviewDate}>{review.date}</span>
      </div>
      <p className={styles.reviewTitle}>{review.title}</p>
      {review.scores && <ReviewScores scores={review.scores} />}
    </div>
  )
}

const REVIEW_FILTERS = [
  { id: 'all',     label: 'All',         keywords: null },
  { id: 'sizing',  label: 'Sizing',      keywords: ['size', 'sizing', 'small', 'large', 'tight', 'loose', 'runs'] },
  { id: 'fit',     label: 'Fit',         keywords: ['fit', 'flattering', 'contour', 'holds', 'shape'] },
  { id: 'support', label: 'Bra Support', keywords: ['bra', 'support', 'cups', 'built-in'] },
  { id: 'fabric',  label: 'Fabric',      keywords: ['soft', 'fabric', 'quality', 'material', 'wash'] },
]

function matchesFilter(review, filter) {
  if (!filter.keywords) return true
  const text = review.title.toLowerCase()
  return filter.keywords.some(kw => text.includes(kw))
}

function ReviewsContent() {
  const [activeFilter, setActiveFilter] = useState('all')
  const avgRating = (MOCK_REVIEWS.reduce((sum, r) => sum + r.stars, 0) / MOCK_REVIEWS.length).toFixed(1)
  const currentFilter = REVIEW_FILTERS.find(f => f.id === activeFilter)
  const filtered = MOCK_REVIEWS.filter(r => matchesFilter(r, currentFilter))

  return (
    <div className={styles.content}>
      <div className={styles.summaryRow}>
        <span className={styles.avgScore}>{avgRating}</span>
        <Stars count={Math.round(Number(avgRating))} />
        <span className={styles.reviewCount}>Based on {MOCK_REVIEWS.length} reviews</span>
      </div>

      <div className={styles.summaryScales}>
        {[
          { label: 'Product Quality', low: 'Not as expected', high: 'Incredible', value: AGGREGATE_SCORES.quality },
          { label: 'Sizing', low: 'Size Down', high: 'Size Up', value: AGGREGATE_SCORES.sizing },
          { label: 'Fit', low: 'Loose', high: 'Tight', value: AGGREGATE_SCORES.fit },
        ].map(({ label, low, high, value }) => (
          <div key={label} className={styles.summaryScaleItem}>
            <span className={styles.scoreLabel}>{label}:</span>
            <div className={styles.scoreTrack}>
              <div className={styles.scoreFill} style={{ width: `${value}%` }} />
            </div>
            <div className={styles.scoreEnds}>
              <span>{low}</span>
              <span>{high}</span>
            </div>
          </div>
        ))}
      </div>

      <div className={styles.filterChips}>
        {REVIEW_FILTERS.map(f => (
          <button
            key={f.id}
            className={`${styles.filterChip} ${activeFilter === f.id ? styles.filterChipActive : ''}`}
            onClick={() => setActiveFilter(f.id)}
          >
            {f.label}
          </button>
        ))}
      </div>

      <div className={styles.reviewsList}>
        {filtered.length > 0 ? (
          filtered.map((review, i) => (
            <ReviewCard key={i} review={review} />
          ))
        ) : (
          <p className={styles.noResults}>No reviews matching "{currentFilter.label}" yet</p>
        )}
      </div>
    </div>
  )
}

export default function V2TabbedModal({ open, initialTab, onClose, model }) {
  const [activeTab, setActiveTab] = useState(initialTab || 'features')
  const { sheetRef, handleProps } = useDragToDismiss(onClose)
  const swipeRef = useRef(null)
  const tabsRef = useRef(null)
  const indicatorRef = useRef(null)

  // When modal opens with a new tab, sync state + scroll + indicator in one effect
  useEffect(() => {
    if (!open || !initialTab) return
    setActiveTab(initialTab)
    const el = swipeRef.current
    if (!el) return
    const idx = TABS.findIndex(t => t.id === initialTab)
    requestAnimationFrame(() => {
      el.scrollTo({ left: idx * el.offsetWidth, behavior: 'instant' })
      positionIndicator(idx, false)
    })
  }, [open, initialTab])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  // Position the sliding indicator over a tab button
  const positionIndicator = useCallback((idx, animate = true) => {
    const bar = indicatorRef.current
    const tabsEl = tabsRef.current
    if (!bar || !tabsEl) return
    const btn = tabsEl.children[idx]
    if (!btn) return
    const tabsRect = tabsEl.getBoundingClientRect()
    const btnRect = btn.getBoundingClientRect()
    bar.style.transition = animate ? 'left 0.25s ease, width 0.25s ease' : 'none'
    bar.style.left = `${btnRect.left - tabsRect.left}px`
    bar.style.width = `${btnRect.width}px`
  }, [])

  // On tab click: scroll to panel + move indicator
  const handleTabClick = useCallback((tabId) => {
    setActiveTab(tabId)
    const el = swipeRef.current
    if (!el) return
    const idx = TABS.findIndex(t => t.id === tabId)
    el.scrollTo({ left: idx * el.offsetWidth, behavior: 'smooth' })
    positionIndicator(idx)
  }, [positionIndicator])

  // On swipe: update indicator in real-time + update active tab at snap points
  const handleScroll = useCallback(() => {
    const el = swipeRef.current
    if (!el || !el.offsetWidth) return
    const progress = el.scrollLeft / el.offsetWidth
    const snappedIdx = Math.round(progress)

    // Move indicator smoothly between tabs based on scroll fraction
    const bar = indicatorRef.current
    const tabsEl = tabsRef.current
    if (bar && tabsEl) {
      const floorIdx = Math.floor(progress)
      const ceilIdx = Math.min(floorIdx + 1, TABS.length - 1)
      const frac = progress - floorIdx
      const floorBtn = tabsEl.children[floorIdx]
      const ceilBtn = tabsEl.children[ceilIdx]
      if (floorBtn && ceilBtn) {
        const tabsRect = tabsEl.getBoundingClientRect()
        const floorRect = floorBtn.getBoundingClientRect()
        const ceilRect = ceilBtn.getBoundingClientRect()
        const left = floorRect.left + (ceilRect.left - floorRect.left) * frac - tabsRect.left
        const width = floorRect.width + (ceilRect.width - floorRect.width) * frac
        bar.style.transition = 'none'
        bar.style.left = `${left}px`
        bar.style.width = `${width}px`
      }
    }

    // Update active tab text style at snap points
    const tab = TABS[snappedIdx]
    if (tab) setActiveTab(prev => prev === tab.id ? prev : tab.id)
  }, [])

  if (!open) return null

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div ref={sheetRef} className={styles.sheet} onClick={e => e.stopPropagation()}>
        <div className={styles.dragHandle} {...handleProps}>
          <div className={styles.dragBar} />
        </div>
        <div className={styles.header}>
          <button className={styles.closeBtn} onClick={onClose} aria-label="Close">
            <CloseIcon />
          </button>
        </div>

        <div className={styles.tabsWrap}>
          <div className={styles.tabs} ref={tabsRef}>
            {TABS.map(tab => (
              <button
                key={tab.id}
                className={`${styles.tab} ${activeTab === tab.id ? styles.tabActive : ''}`}
                onClick={() => handleTabClick(tab.id)}
              >
                {tab.label}
              </button>
            ))}
          </div>
          <div className={styles.tabIndicator} ref={indicatorRef} />
        </div>

        <div
          className={styles.swipeContainer}
          ref={swipeRef}
          onScroll={handleScroll}
        >
          <div className={styles.swipePanel}>
            <div className={styles.body}><FeaturesContent /></div>
          </div>
          <div className={styles.swipePanel}>
            <div className={styles.body}><ModelContent model={model} /></div>
          </div>
          <div className={styles.swipePanel}>
            <div className={styles.body}><DeliveryContent /></div>
          </div>
        </div>
      </div>
    </div>
  )
}
