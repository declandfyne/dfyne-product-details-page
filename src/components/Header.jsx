import { ASSETS } from '../data/product'
import styles from './Header.module.css'

const UTILITY_LINKS = ['Contact Us', 'Track My Order', 'Rewards']
const NAV_ITEMS = ["women's", "men's"]

const CaretDown = () => (
  <svg width="12" height="13" viewBox="0 0 12 13" fill="none" aria-hidden="true">
    <path d="M2 4.5L6 8.5L10 4.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

const SearchIcon = () => (
  <svg width="20" height="20" viewBox="0 0 18 18" fill="none" aria-hidden="true">
    <circle cx="7.5" cy="7.5" r="5" stroke="currentColor" strokeWidth="1.4" />
    <line x1="11.5" y1="11.5" x2="15.5" y2="15.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
  </svg>
)

const CartIcon = () => (
  <svg width="20" height="20" viewBox="0 0 18 18" fill="none" aria-hidden="true">
    <path d="M3 5h12l-1.2 9H4.2L3 5z" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round" />
    <path d="M6.5 7V5a2.5 2.5 0 015 0v2" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
  </svg>
)

const ProfileIcon = () => (
  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
    <circle cx="9" cy="5.5" r="3.25" stroke="currentColor" strokeWidth="1.2" />
    <path d="M3.25 15.25C4.23 12.93 6.34 11.75 9 11.75C11.66 11.75 13.77 12.93 14.75 15.25" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
  </svg>
)

const InstagramIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
    <rect x="2.1" y="2.1" width="11.8" height="11.8" rx="3.2" stroke="currentColor" strokeWidth="1.2" />
    <circle cx="8" cy="8" r="2.8" stroke="currentColor" strokeWidth="1.2" />
    <circle cx="11.7" cy="4.35" r="0.85" fill="currentColor" />
  </svg>
)

const TikTokIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
    <path d="M9.42 2C9.67 2.95 10.27 3.7 11.16 4.19C11.77 4.53 12.44 4.7 13.15 4.71V6.39C12.4 6.37 11.67 6.2 11.02 5.9V9.49C11.02 11.8 9.16 13.66 6.85 13.66C4.54 13.66 2.68 11.8 2.68 9.49C2.68 7.18 4.54 5.32 6.85 5.32C7.13 5.32 7.42 5.35 7.68 5.43V7.24C7.42 7.13 7.14 7.08 6.85 7.08C5.51 7.08 4.43 8.16 4.43 9.49C4.43 10.82 5.51 11.9 6.85 11.9C8.18 11.9 9.26 10.82 9.26 9.49V2H9.42Z" fill="currentColor" />
  </svg>
)

const YouTubeIcon = () => (
  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
    <path d="M15.52 5.27C15.85 6.05 16 7.43 16 9C16 10.57 15.85 11.95 15.52 12.73C15.27 13.31 14.82 13.76 14.25 14.01C13.46 14.34 11.71 14.5 9 14.5C6.29 14.5 4.54 14.34 3.75 14.01C3.18 13.76 2.73 13.31 2.48 12.73C2.15 11.95 2 10.57 2 9C2 7.43 2.15 6.05 2.48 5.27C2.73 4.69 3.18 4.24 3.75 3.99C4.54 3.66 6.29 3.5 9 3.5C11.71 3.5 13.46 3.66 14.25 3.99C14.82 4.24 15.27 4.69 15.52 5.27Z" stroke="currentColor" strokeWidth="1.15" />
    <path d="M7.3 6.7L11.5 9L7.3 11.3V6.7Z" fill="currentColor" />
  </svg>
)

const FacebookIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
    <path d="M9.3 14V8.73H11.07L11.34 6.68H9.3V5.37C9.3 4.77 9.47 4.36 10.34 4.36H11.41V2.53C10.89 2.46 10.36 2.43 9.83 2.43C8.26 2.43 7.18 3.38 7.18 5.14V6.68H5.41V8.73H7.18V14H9.3Z" fill="currentColor" />
  </svg>
)

export default function Header() {
  return (
    <header className={styles.header} id="site-header" data-analytics-id="site-header">
      <div className={styles.mobileBar} id="mobile-header" data-analytics-id="mobile-header">
        <button type="button" className={styles.hamburger} aria-label="Menu" id="mobile-menu-button" data-analytics-id="mobile-menu-button">
          <span />
          <span className={styles.medium} />
          <span className={styles.long} />
        </button>

        <img className={styles.logo} src={ASSETS.logo} alt="DFYNE" />

        <div className={styles.actions}>
          <button type="button" className={styles.iconBtn} aria-label="Search" id="mobile-search-button" data-analytics-id="mobile-search-button">
            <SearchIcon />
          </button>
          <button type="button" className={styles.iconBtn} aria-label="Cart" id="mobile-cart-button" data-analytics-id="mobile-cart-button">
            <CartIcon />
            <div className={styles.cartBadge}><span>1</span></div>
          </button>
        </div>
      </div>

      <div className={styles.desktopShell} id="desktop-header" data-analytics-id="desktop-header">
        <div className={styles.utilityBar} id="header-utility-bar" data-analytics-id="header-utility-bar">
          <div className={styles.utilityLinks} id="header-utility-links" data-analytics-id="header-utility-links">
            {UTILITY_LINKS.map(label => (
              <button key={label} type="button" className={styles.utilityLink} data-analytics-id="header-utility-link" data-analytics-label={label}>
                {label}
              </button>
            ))}
          </div>

          <div className={styles.socials} aria-label="Social links" id="header-social-links" data-analytics-id="header-social-links">
            <button type="button" className={styles.socialBtn} aria-label="Instagram" data-analytics-id="header-social-button" data-analytics-label="instagram">
              <InstagramIcon />
            </button>
            <button type="button" className={styles.socialBtn} aria-label="TikTok" data-analytics-id="header-social-button" data-analytics-label="tiktok">
              <TikTokIcon />
            </button>
            <button type="button" className={styles.socialBtn} aria-label="YouTube" data-analytics-id="header-social-button" data-analytics-label="youtube">
              <YouTubeIcon />
            </button>
            <button type="button" className={styles.socialBtn} aria-label="Facebook" data-analytics-id="header-social-button" data-analytics-label="facebook">
              <FacebookIcon />
            </button>
          </div>
        </div>

        <div className={styles.mainBar} id="header-main-bar" data-analytics-id="header-main-bar">
          <nav className={styles.desktopNav} aria-label="Primary" id="primary-navigation" data-analytics-id="primary-navigation">
            {NAV_ITEMS.map(item => (
              <button key={item} type="button" className={styles.navTrigger} data-analytics-id="primary-nav-item" data-analytics-label={item}>
                <span>{item}</span>
                <CaretDown />
              </button>
            ))}
          </nav>

          <img className={styles.desktopLogo} src={ASSETS.logo} alt="DFYNE" />

          <div className={styles.desktopActions} id="header-actions" data-analytics-id="header-actions">
            <button type="button" className={`${styles.iconBtn} ${styles.desktopActionBtn}`} aria-label="Account" id="desktop-account-button" data-analytics-id="desktop-account-button">
              <ProfileIcon />
            </button>
            <button type="button" className={`${styles.iconBtn} ${styles.desktopActionBtn}`} aria-label="Search" id="desktop-search-button" data-analytics-id="desktop-search-button">
              <SearchIcon />
            </button>
            <button type="button" className={`${styles.iconBtn} ${styles.desktopActionBtn}`} aria-label="Cart" id="desktop-cart-button" data-analytics-id="desktop-cart-button">
              <CartIcon />
              <div className={`${styles.cartBadge} ${styles.desktopCartBadge}`}><span>1</span></div>
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}
