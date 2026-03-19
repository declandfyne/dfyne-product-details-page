import { LOOK_ITEMS } from '../data/product'
import styles from './CompleteLook.module.css'

export default function CompleteLook() {
  return (
    <div className={styles.section}>
      <p className={styles.title}>COMPLETE YOUR LOOK</p>
      <div className={styles.scroll}>
        {LOOK_ITEMS.map(item => (
          <div key={item.id} className={styles.card}>
            <img src={item.img} alt={item.name} />
            <p className={styles.name}>{item.name}</p>
            <span className={styles.color}>{item.color}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
