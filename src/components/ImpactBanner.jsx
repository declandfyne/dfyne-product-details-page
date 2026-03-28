import styles from './ImpactBanner.module.css'

export default function ImpactBanner() {
  return (
    <div className={styles.banner}>
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        <path d="M10 4L6 8L10 12" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      <p>IMPACT COLLECTION</p>
    </div>
  )
}
