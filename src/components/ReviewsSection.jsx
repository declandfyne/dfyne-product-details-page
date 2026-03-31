import { REVIEW_RATINGS } from '../data/product'
import styles from './ReviewsSection.module.css'

const StarIcon = () => (
  <svg width="10" height="10" viewBox="0 0 24 24" fill="#0a0a0a" stroke="none" aria-hidden="true">
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
  </svg>
)

const ReviewChevron = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
    <path d="M6 4L10 8L6 12" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

const ReviewAvatarIcon = () => (
  <svg width="21" height="21" viewBox="0 0 24 24" fill="none" stroke="#888" strokeWidth="1.5" aria-hidden="true">
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
    <circle cx="12" cy="7" r="4" />
  </svg>
)

const FEATURED_REVIEWS = [
  {
    name: 'Jasmine P.',
    date: '10/12/2025',
    location: 'United States',
    title: 'The built-in bra is a game changer',
    excerpt: 'I was surprised by how secure this feels for a bandeau. The built-in bra makes a huge difference and it stays comfortable through an entire workout.',
  },
  {
    name: 'Aisha K.',
    date: '28/12/2025',
    location: 'Australia',
    title: 'Incredibly soft fabric',
    excerpt: 'The fabric feels buttery soft without losing shape, and the fit is really flattering. It is one of those pieces that looks elevated on and off the gym floor.',
  },
  {
    name: 'Olivia D.',
    date: '28/11/2025',
    location: 'Canada',
    title: 'Ordered two more after my first',
    excerpt: 'Once I tried the first one I immediately came back for more colours. It washes well, keeps its shape and still feels supportive without digging in.',
  },
  {
    name: 'Emma R.',
    date: '20/12/2025',
    location: 'United Kingdom',
    title: 'Perfect for the gym and brunch after',
    excerpt: 'This is one of those pieces that works for training but still feels elevated enough to wear the rest of the day. The fit is flattering and really easy to style.',
  },
]

const REVIEW_DISTRIBUTION = [
  { label: '5 stars', count: 5421, share: 84 },
  { label: '4 stars', count: 781, share: 12 },
  { label: '3 stars', count: 327, share: 5 },
  { label: '2 stars', count: 142, share: 2 },
  { label: '1 star', count: 75, share: 1 },
]

export default function ReviewsSection({ onOpenReviews }) {
  return (
    <section className={styles.section}>
      <button type="button" className={styles.reviewHeader} onClick={onOpenReviews}>
        <span className={styles.reviewTitle}>CUSTOMER REVIEWS</span>
        <ReviewChevron />
      </button>

      <div className={styles.reviewLayout}>
        <button type="button" className={styles.reviewScoreRow} onClick={onOpenReviews}>
          <div className={styles.reviewSnapshotCard}>
            <div className={styles.reviewSnapshotCenter}>
              <span className={styles.reviewSnapshotKicker}>Customer recommended</span>
              <span className={styles.reviewSnapshotScore}>5.0</span>
              <span className={styles.reviewSnapshotStars}>
                {[1, 2, 3, 4, 5].map(i => <StarIcon key={i} />)}
              </span>
              <span className={styles.reviewSnapshotCount}>6,746 reviews</span>
            </div>
          </div>
        </button>

        <div className={styles.reviewBreakdownCard}>
          <p className={styles.reviewCardHeading}>Rating breakdown</p>
          <div className={styles.reviewDistributionList}>
            {REVIEW_DISTRIBUTION.map(({ label, count, share }) => (
              <div key={label} className={styles.reviewDistributionRow}>
                <span className={styles.reviewDistributionLabel}>{label}</span>
                <div className={styles.reviewDistributionTrack}>
                  <div className={styles.reviewDistributionFill} style={{ width: `${share}%` }} />
                </div>
                <span className={styles.reviewDistributionCount}>{count.toLocaleString()}</span>
              </div>
            ))}
          </div>
        </div>

        <div className={`${styles.reviewBreakdownCard} ${styles.fitRatingCard}`}>
          <p className={styles.reviewCardHeading}>Fit rating</p>
          <div className={styles.reviewBars}>
            {REVIEW_RATINGS.map(({ label, value }) => (
              <div key={label} className={styles.reviewBarItem}>
                <span className={styles.reviewBarLabel}>{label}</span>
                <div className={styles.reviewBarTrack}>
                  <div className={styles.reviewBarFill} style={{ width: `${value}%` }} />
                </div>
              </div>
            ))}
          </div>
        </div>

        <button type="button" className={styles.writeReviewBtn} onClick={onOpenReviews}>
          WRITE A REVIEW
        </button>

        <div className={styles.featuredReviews}>
          {FEATURED_REVIEWS.map((review) => (
            <button
              key={review.name}
              type="button"
              className={styles.featuredReviewCard}
              onClick={onOpenReviews}
            >
              <div className={styles.featuredReviewHeader}>
                <div className={styles.featuredReviewAvatar}>
                  <ReviewAvatarIcon />
                </div>
                <div className={styles.featuredReviewUserInfo}>
                  <div className={styles.featuredReviewMeta}>
                    <span className={styles.featuredReviewName}>{review.name}</span>
                    <span className={styles.featuredReviewVerified}>Verified</span>
                  </div>
                  <span className={styles.featuredReviewLocation}>{review.location}</span>
                </div>
              </div>
              <div className={styles.featuredReviewCopy}>
                <div className={styles.featuredReviewRatingRow}>
                  <span className={styles.featuredReviewStars}>
                    {[1, 2, 3, 4, 5].map(i => <StarIcon key={i} />)}
                  </span>
                </div>
                <p className={styles.featuredReviewTitle}>{review.title}</p>
                <p className={styles.featuredReviewText}>{review.excerpt}</p>
              </div>
              <span className={styles.featuredReviewDate}>{review.date}</span>
            </button>
          ))}
        </div>

        <button className={styles.readAllBtn} onClick={onOpenReviews}>
          Read all 6,746 reviews
        </button>
      </div>
    </section>
  )
}
