import { useEffect } from 'react'
import styles from './ReviewsModal.module.css'

const CloseIcon = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
    <path d="M1 1L13 13M13 1L1 13" stroke="#0a0a0a" strokeWidth="1.4" strokeLinecap="round" />
  </svg>
)

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
  {
    name: 'Reyna V.',
    verified: true,
    location: 'United States',
    date: '14/01/2026',
    stars: 5,
    title: 'Love this jacket!',
    scores: { quality: 100, sizing: 74, fit: 74 },
  },
  {
    name: 'Sophie L.',
    verified: true,
    location: 'United Kingdom',
    date: '09/01/2026',
    stars: 5,
    title: 'Best workout top I own',
    scores: { quality: 95, sizing: 50, fit: 60 },
  },
  {
    name: 'Megan T.',
    verified: true,
    location: 'Canada',
    date: '02/01/2026',
    stars: 5,
    title: 'Super cute, runs a little small',
    scores: { quality: 90, sizing: 85, fit: 80 },
  },
  {
    name: 'Aisha K.',
    verified: true,
    location: 'Australia',
    date: '28/12/2025',
    stars: 5,
    title: 'Incredibly soft fabric',
    scores: null,
  },
  {
    name: 'Emma R.',
    verified: true,
    location: 'United Kingdom',
    date: '20/12/2025',
    stars: 5,
    title: 'Perfect for the gym and brunch after',
    scores: { quality: 100, sizing: 50, fit: 55 },
  },
  {
    name: 'Chloe B.',
    verified: false,
    location: 'Ireland',
    date: '15/12/2025',
    stars: 5,
    title: 'Great quality, wished it came in more colours',
    scores: null,
  },
  {
    name: 'Jasmine P.',
    verified: true,
    location: 'United States',
    date: '10/12/2025',
    stars: 5,
    title: 'The built-in bra is a game changer',
    scores: { quality: 100, sizing: 55, fit: 65 },
  },
  {
    name: 'Nina W.',
    verified: true,
    location: 'Germany',
    date: '05/12/2025',
    stars: 5,
    title: 'Flattering fit, holds everything in place',
    scores: null,
  },
  {
    name: 'Olivia D.',
    verified: true,
    location: 'Canada',
    date: '28/11/2025',
    stars: 5,
    title: 'Ordered two more after my first',
    scores: { quality: 95, sizing: 50, fit: 50 },
  },
  {
    name: 'Priya S.',
    verified: true,
    location: 'United Kingdom',
    date: '20/11/2025',
    stars: 5,
    title: 'Washes beautifully, no shape loss',
    scores: null,
  },
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
    <div className={styles.card}>
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
          <span className={styles.location}>{review.location}</span>
        </div>
      </div>

      <div className={styles.ratingRow}>
        <Stars count={review.stars} />
        <span className={styles.date}>{review.date}</span>
      </div>

      <p className={styles.reviewTitle}>{review.title}</p>

      {review.scores && <ReviewScores scores={review.scores} />}
    </div>
  )
}

export default function ReviewsModal({ open, onClose }) {
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  if (!open) return null

  const avgRating = (MOCK_REVIEWS.reduce((sum, r) => sum + r.stars, 0) / MOCK_REVIEWS.length).toFixed(1)

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.sheet} onClick={e => e.stopPropagation()}>
        <div className={styles.header}>
          <button className={styles.closeBtn} onClick={onClose} aria-label="Close">
            <CloseIcon />
          </button>
        </div>

        <div className={styles.body}>
          <div className={styles.summarySection}>
            <p className={styles.title}>CUSTOMER REVIEWS</p>
            <div className={styles.summaryRow}>
              <span className={styles.avgScore}>{avgRating}</span>
              <Stars count={Math.round(Number(avgRating))} />
              <span className={styles.reviewCount}>Based on {MOCK_REVIEWS.length} reviews</span>
            </div>
          </div>

          <div className={styles.reviewsList}>
            {MOCK_REVIEWS.map((review, i) => (
              <ReviewCard key={i} review={review} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
