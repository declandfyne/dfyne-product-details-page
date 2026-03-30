import styles from './ImpactBanner.module.css'

export default function ImpactBanner() {
  return (
    <div className={styles.banner}>
      <div className={styles.content}>
        <p className={styles.caption}>HASSLE-FREE RETURNS</p>
        <p className={styles.body}>100-day free returns*</p>
      </div>
    </div>
  )
}
