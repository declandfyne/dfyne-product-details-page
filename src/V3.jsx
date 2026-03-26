import { useState } from 'react'
import { COLORS, SIZES, ASSETS } from './data/product'

import Header        from './components/Header'
import ImpactBanner  from './components/ImpactBanner'
import ProductImage  from './components/ProductImage'
import ProductInfo   from './components/ProductInfo'
import ColorSelector from './components/ColorSelector'
import SizeSelector  from './components/SizeSelector'
import CartSection   from './components/CartSection'
import V3InfoSection from './components/V3InfoSection'
import V2TabbedModal from './components/V2TabbedModal'
import InfoModal     from './components/InfoModal'
import CompleteLook  from './components/CompleteLook'
import PaymentModal  from './components/PaymentModal'

import styles from './V1.module.css'

const DEFAULT_COLOR = COLORS.find(c => c.id === 'midnight-black')
const DEFAULT_SIZE  = SIZES.find(s => s.id === 'xs')

export default function V3() {
  const [selectedColor,  setSelectedColor]  = useState(DEFAULT_COLOR)
  const [selectedSize,   setSelectedSize]   = useState(DEFAULT_SIZE)
  const [paymentOpen,    setPaymentOpen]    = useState(false)
  const [detailsOpen,    setDetailsOpen]    = useState(false)
  const [reviewsOpen,    setReviewsOpen]    = useState(false)

  return (
    <div className={styles.page}>
      <Header />
      <ImpactBanner />

      <ProductImage src={selectedColor.img} images={selectedColor.images} alt={`Longline Strappy Top – ${selectedColor.name}`} model={selectedColor.model} onModelClick={() => setDetailsOpen(true)} />

      <ProductInfo onOpenReviews={() => setReviewsOpen(true)} showFeatures={selectedColor.id === 'navy'} />

      <hr className={styles.divider} />

      <ColorSelector
        selectedId={selectedColor.id}
        onChange={setSelectedColor}
      />

      <SizeSelector
        selectedId={selectedSize.id}
        onChange={setSelectedSize}
      />

      <CartSection onOpenPayment={() => setPaymentOpen(true)} />

      <PaymentModal open={paymentOpen} onClose={() => setPaymentOpen(false)} />

      <hr className={styles.dividerNoTop} />

      {/* V3: Single "Product Details" button + separate reviews */}
      <V3InfoSection
        onOpenDetails={() => setDetailsOpen(true)}
        onOpenReviews={() => setReviewsOpen(true)}
        featureLayout={selectedColor.id === 'navy' ? 'hidden' : (selectedColor.id === 'teal' || selectedColor.id === 'midnight-black') ? 'standalone' : selectedColor.id === 'truffle' ? 'standalone-pills' : 'button'}
      />

      {/* Tabbed modal for features/model/delivery */}
      <V2TabbedModal
        open={detailsOpen}
        initialTab="features"
        onClose={() => setDetailsOpen(false)}
        model={selectedColor.model}
      />

      {/* Reviews gets its own modal */}
      <InfoModal
        open={reviewsOpen}
        activeTab="reviews"
        onClose={() => setReviewsOpen(false)}
        model={selectedColor.model}
        productImg={ASSETS.modelPhoto}
      />

      <hr className={styles.divider} />

      <CompleteLook />

      <div className={styles.bottomPad} />
    </div>
  )
}
