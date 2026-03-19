import { ASSETS } from '../data/product'
import styles from './Header.module.css'

export default function Header() {
  return (
    <header className={styles.header}>
      <button className={styles.hamburger} aria-label="Menu">
        <span />
        <span className={styles.short} />
        <span />
      </button>

      <img className={styles.logo} src={ASSETS.logo} alt="DFYNE" />

      <div className={styles.actions}>
        <button className={styles.iconBtn} aria-label="Search">
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
            <circle cx="7.5" cy="7.5" r="5" stroke="black" strokeWidth="1.5" />
            <line x1="11.5" y1="11.5" x2="15.5" y2="15.5" stroke="black" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </button>
        <button className={styles.iconBtn} aria-label="Cart">
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
            <path d="M3 5h12l-1.2 9H4.2L3 5z" stroke="black" strokeWidth="1.4" strokeLinejoin="round" />
            <path d="M6.5 7V5a2.5 2.5 0 015 0v2" stroke="black" strokeWidth="1.4" strokeLinecap="round" />
          </svg>
          <div className={styles.cartBadge}><span>3</span></div>
        </button>
      </div>
    </header>
  )
}
