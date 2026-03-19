import { useState } from 'react'
import styles from './Accordion.module.css'

const ChevronIcon = () => (
  <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
    <path d="M4 5.5L7.5 9.5L11 5.5" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

export default function Accordion({ title, bold = false, defaultOpen = false, children }) {
  const [open, setOpen] = useState(defaultOpen)

  return (
    <div className={styles.accordion}>
      <button className={styles.header} onClick={() => setOpen(o => !o)}>
        <span className={`${styles.title} ${bold ? styles.bold : ''}`}>{title}</span>
        <span className={`${styles.chevron} ${open ? styles.open : ''}`}>
          <ChevronIcon />
        </span>
      </button>
      {open && <div className={styles.body}>{children}</div>}
    </div>
  )
}
