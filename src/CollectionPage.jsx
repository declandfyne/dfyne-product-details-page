import { useState } from 'react'
import { Link } from 'react-router-dom'
import Header from './components/Header'
import { COLLECTION_PRODUCTS } from './data/collection'
import styles from './CollectionPage.module.css'

const FilterIcon = () => (
  <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
    <path d="M2 4h12M4 8h8M6 12h4" stroke="#0a0a0a" strokeWidth="1.3" strokeLinecap="round" />
  </svg>
)

const PlusIcon = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
    <path d="M7 1v12M1 7h12" stroke="#0a0a0a" strokeWidth="1.4" strokeLinecap="round" />
  </svg>
)

const GridIcon1 = ({ active }) => (
  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
    <rect x="1" y="1" width="16" height="16" rx="1.5" stroke={active ? '#0a0a0a' : '#bbb'} strokeWidth="1.3" fill={active ? '#0a0a0a' : 'none'} />
  </svg>
)

const GridIcon2 = ({ active }) => (
  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
    <rect x="1" y="1" width="7" height="16" rx="1.5" stroke={active ? '#0a0a0a' : '#bbb'} strokeWidth="1.3" fill={active ? '#0a0a0a' : 'none'} />
    <rect x="10" y="1" width="7" height="16" rx="1.5" stroke={active ? '#0a0a0a' : '#bbb'} strokeWidth="1.3" fill={active ? '#0a0a0a' : 'none'} />
  </svg>
)

const GridIcon3 = ({ active }) => (
  <svg width="22" height="18" viewBox="0 0 22 18" fill="none">
    <rect x="1" y="1" width="5.5" height="16" rx="1.5" stroke={active ? '#0a0a0a' : '#bbb'} strokeWidth="1.3" fill={active ? '#0a0a0a' : 'none'} />
    <rect x="8.25" y="1" width="5.5" height="16" rx="1.5" stroke={active ? '#0a0a0a' : '#bbb'} strokeWidth="1.3" fill={active ? '#0a0a0a' : 'none'} />
    <rect x="15.5" y="1" width="5.5" height="16" rx="1.5" stroke={active ? '#0a0a0a' : '#bbb'} strokeWidth="1.3" fill={active ? '#0a0a0a' : 'none'} />
  </svg>
)

const StarIcon = () => (
  <svg width="10" height="10" viewBox="0 0 24 24" fill="#0a0a0a" stroke="none">
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
  </svg>
)

function ProductCard({ product }) {
  return (
    <Link to="/product" className={styles.card}>
      <div className={styles.imageWrap}>
        <img className={styles.productImg} src={product.img} alt={`${product.name} – ${product.color}`} />
        {product.isNew && <span className={styles.newBadge}>NEW</span>}
        <button className={styles.quickAdd} onClick={e => e.preventDefault()} aria-label="Quick add">
          <PlusIcon />
        </button>
      </div>
      <div className={styles.meta}>
        <p className={styles.productName}>{product.name}</p>
        <p className={styles.productColor}>{product.color}</p>
        <div className={styles.priceRow}>
          <span className={styles.price}>{product.price}</span>
          <div className={styles.reviewInfo}>
            <div className={styles.stars}>
              {[1, 2, 3, 4, 5].map(i => <StarIcon key={i} />)}
            </div>
            <span className={styles.reviewCount}>({product.reviews.toLocaleString()})</span>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default function CollectionPage() {
  const [gridCols, setGridCols] = useState(2)

  const gridClass = gridCols === 1 ? styles.grid1 : gridCols === 3 ? styles.grid3 : styles.grid

  return (
    <>
      <Header />
      <div className={styles.page}>
        <div className={styles.collectionHeader}>
          <p className={styles.subtitle}>Womens</p>
          <h1 className={styles.title}>IMPACT</h1>
        </div>

        <div className={styles.filterBar}>
          <button className={styles.filterBtn}>
            <FilterIcon />
            Filter
          </button>
          <div className={styles.filterRight}>
            <span className={styles.productCount}>{COLLECTION_PRODUCTS.length} products</span>
            <div className={styles.gridToggles}>
              <button className={styles.gridToggle} onClick={() => setGridCols(1)} aria-label="1 column">
                <GridIcon1 active={gridCols === 1} />
              </button>
              <button className={styles.gridToggle} onClick={() => setGridCols(2)} aria-label="2 columns">
                <GridIcon2 active={gridCols === 2} />
              </button>
              <button className={styles.gridToggle} onClick={() => setGridCols(3)} aria-label="3 columns">
                <GridIcon3 active={gridCols === 3} />
              </button>
            </div>
          </div>
        </div>

        <div className={gridClass}>
          {COLLECTION_PRODUCTS.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className={styles.bottomPad} />
      </div>
    </>
  )
}
