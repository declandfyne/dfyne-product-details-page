import { useState, useEffect } from 'react'
import styles from './InfoModal.module.css'
import FeatureRatings from './FeatureRatings'
import { FEATURE_RATINGS } from '../data/product'

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

const AGGREGATE_SCORES = { quality: 95, sizing: 78, fit: 72 }

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
      <div className={styles.summarySection}>
        <div className={styles.summaryRow}>
          <span className={styles.avgScore}>{avgRating}</span>
          <Stars count={Math.round(Number(avgRating))} />
          <span className={styles.reviewCount}>Based on {MOCK_REVIEWS.length} reviews</span>
        </div>
      </div>

      <div className={styles.summaryScales}>
        <div className={styles.summaryScalesRow}>
          <div className={styles.summaryScaleItem}>
            <span className={styles.summaryScaleLabel}>Product Quality:</span>
            <div className={styles.summaryScaleTrack}>
              <div className={styles.summaryScaleFill} style={{ width: `${AGGREGATE_SCORES.quality}%` }} />
            </div>
            <div className={styles.summaryScaleEnds}>
              <span>Not as expected</span>
              <span>Incredible</span>
            </div>
          </div>
          <div className={styles.summaryScaleItem}>
            <span className={styles.summaryScaleLabel}>Sizing:</span>
            <div className={styles.summaryScaleTrack}>
              <div className={styles.summaryScaleFill} style={{ width: `${AGGREGATE_SCORES.sizing}%` }} />
            </div>
            <div className={styles.summaryScaleEnds}>
              <span>Size Down</span>
              <span>Size Up</span>
            </div>
          </div>
        </div>
        <div className={styles.summaryScaleItemHalf}>
          <span className={styles.summaryScaleLabel}>Fit:</span>
          <div className={styles.summaryScaleTrack}>
            <div className={styles.summaryScaleFill} style={{ width: `${AGGREGATE_SCORES.fit}%` }} />
          </div>
          <div className={styles.summaryScaleEnds}>
            <span>Loose</span>
            <span>Tight</span>
          </div>
        </div>
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

function FeaturesContent() {
  return (
    <div className={styles.content}>
      <div className={styles.featSection}>
        <ul className={styles.bulletList}>
          {HIGHLIGHTS.map(h => (
            <li key={h} className={styles.bulletItem}>{h}</li>
          ))}
        </ul>
      </div>

      <div className={styles.featSection}>
        <p className={styles.featSectionLabel}>MATERIAL & FEEL</p>
        <div className={styles.materialBar}>
          <div className={styles.materialFill} style={{ width: '90%' }}>
            <span className={styles.materialLabel}>90% Nylon</span>
          </div>
          <div className={styles.materialRemainder}>
            <span className={styles.materialLabel}>10% Elastane</span>
          </div>
        </div>
        <FeatureRatings ratings={FEATURE_RATINGS} />
      </div>

      <div className={styles.fitCallout}>
        <p className={styles.fitCalloutTitle}>FIT GUIDE</p>
        <p className={styles.fitCalloutText}>
          <strong>Firm at True to Size.</strong> Size up for a more relaxed fit.
        </p>
      </div>


      <div className={styles.featSection}>
        <p className={styles.featSectionLabel}>EASY CARE</p>
        <ul className={styles.bulletList}>
          <li className={styles.bulletItem}>Machine wash cold, gentle cycle</li>
          <li className={styles.bulletItem}>Air dry flat — keeps its shape wash after wash</li>
          <li className={styles.bulletItem}>Skip the fabric softener & bleach</li>
        </ul>
      </div>
      <div className={styles.featSection}>
        <p className={styles.featSectionLabel}>MORE TO EXPLORE</p>
        <div className={styles.shopBtns}>
          <a href="#" className={styles.shopBtn}>Impact Bras</a>
          <a href="#" className={styles.shopBtn}>All Sports Bras</a>
        </div>
      </div>
    </div>
  )
}

const MODEL_MEASUREMENTS = [
  { label: 'Height',    cm: '168',   imperial: '5\'6"'  },
  { label: 'Hips',      cm: '101',   imperial: '40"'    },
  { label: 'Waist',     cm: '69',    imperial: '27"'    },
  { label: 'Bust',      cm: '81.5',  imperial: '32"'    },
  { label: 'Cup Size',  cm: 'B',     imperial: 'B'      },
  { label: 'Dress Size',cm: '8 - 10',imperial: '6 - 8'  },
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

      <div className={styles.featSection}>
        <p className={styles.featSectionLabel}>FULL MEASUREMENTS</p>
        <div className={styles.modelTable}>
          <div className={`${styles.modelRow} ${styles.modelHeader}`}>
            <span className={styles.modelLabel} />
            <span className={styles.modelColHead}>METRIC</span>
            <span className={styles.modelColHead}>IMPERIAL</span>
          </div>
          {MODEL_MEASUREMENTS.map(({ label, cm, imperial }) => (
            <div key={label} className={styles.modelRow}>
              <span className={styles.modelLabel}>{label}</span>
              <span className={styles.modelValue}>{cm}</span>
              <span className={styles.modelValue}>{imperial}</span>
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

const TITLES = {
  features: 'PRODUCT FEATURES',
  model: 'MODEL SIZE',
  delivery: 'DELIVERY & RETURNS',
  reviews: 'CUSTOMER REVIEWS',
}

export default function InfoModal({ open, activeTab, onClose, model, productImg }) {
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  if (!open) return null

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.sheet} onClick={e => e.stopPropagation()}>
        <div className={styles.header}>
          <p className={styles.headerTitle}>{TITLES[activeTab]}</p>
          <button className={styles.closeBtn} onClick={onClose} aria-label="Close">
            <CloseIcon />
          </button>
        </div>

        <div className={styles.body}>
          {activeTab === 'features' && <FeaturesContent />}
          {activeTab === 'model'    && <ModelContent model={model} productImg={productImg} />}
          {activeTab === 'delivery' && <DeliveryContent />}
          {activeTab === 'reviews'  && <ReviewsContent />}
        </div>
      </div>
    </div>
  )
}
