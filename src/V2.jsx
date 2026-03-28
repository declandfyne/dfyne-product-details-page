import { useState } from 'react'
import { COLORS, SIZES, ASSETS } from './data/product'

import Header        from './components/Header'
import ProductImage  from './components/ProductImage'
import ProductInfo   from './components/ProductInfo'
import ColorSelector from './components/ColorSelector'
import SizeSelector  from './components/SizeSelector'
import CartSection   from './components/CartSection'
import InfoSection   from './components/InfoSection'
import V2TabbedModal from './components/V2TabbedModal'
import InfoModal     from './components/InfoModal'
import CompleteLook  from './components/CompleteLook'
import PaymentModal  from './components/PaymentModal'

import styles from './page.module.css'

const DEFAULT_COLOR = COLORS.find(c => c.id === 'midnight-black')
const DEFAULT_SIZE  = SIZES.find(s => s.id === 'xs')

export default function V2() {
  const [selectedColor,  setSelectedColor]  = useState(DEFAULT_COLOR)
  const [selectedSize,   setSelectedSize]   = useState(DEFAULT_SIZE)
  const [paymentOpen,    setPaymentOpen]    = useState(false)
  const [infoTab,        setInfoTab]        = useState(null)

  return (
    <>
      <Header />
      <div className={styles.page}>
      <div className={styles.twoCol}>
        <div className={styles.colLeft}>
          <ProductImage src={selectedColor.img} images={selectedColor.images} alt={`Bandeau Strappy Bra – ${selectedColor.name}`} model={selectedColor.model} onModelClick={() => setInfoTab('model')} />
        </div>

        <div className={styles.colRight}>
          <ProductInfo onOpenReviews={() => setInfoTab('reviews')} showFeatures={selectedColor.id === 'navy'} />

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

          <hr className={styles.dividerNoTop} />

          <InfoSection onOpen={tab => setInfoTab(tab)} onOpenReviews={() => setInfoTab('reviews')} featureLayout={selectedColor.id === 'navy' ? 'hidden' : (selectedColor.id === 'teal' || selectedColor.id === 'midnight-black') ? 'standalone' : selectedColor.id === 'truffle' ? 'standalone-pills' : 'button'} />
        </div>
      </div>

      <hr className={styles.divider} />

      <CompleteLook />

      {/* Modals (position:fixed, DOM location doesn't matter) */}
      <PaymentModal open={paymentOpen} onClose={() => setPaymentOpen(false)} />

      <V2TabbedModal
        open={infoTab !== null && infoTab !== 'reviews'}
        initialTab={infoTab}
        onClose={() => setInfoTab(null)}
        model={selectedColor.model}
      />

      <InfoModal
        open={infoTab === 'reviews'}
        activeTab="reviews"
        onClose={() => setInfoTab(null)}
        model={selectedColor.model}
        productImg={ASSETS.modelPhoto}
      />

      <div className={styles.bottomPad} />
      </div>
    </>
  )
}
