import { useState } from 'react'
import { COLORS, SIZES, ASSETS } from './data/product'

import ImpactBanner from './components/ImpactBanner'
import Header        from './components/Header'
import ProductImage  from './components/ProductImage'
import ProductInfo   from './components/ProductInfo'
import ColorSelector from './components/ColorSelector'
import SizeSelector  from './components/SizeSelector'
import CartSection   from './components/CartSection'
import InfoSection   from './components/InfoSection'
import ReviewsSection from './components/ReviewsSection'
import V2TabbedModal from './components/V2TabbedModal'
import InfoModal     from './components/InfoModal'
import CompleteLookModal from './components/CompleteLookModal'
import PaymentModal  from './components/PaymentModal'

import styles from './page.module.css'

const DEFAULT_COLOR = COLORS.find(c => c.id === 'midnight-black')

export default function V2() {
  const [selectedColor,  setSelectedColor]  = useState(DEFAULT_COLOR)
  const [selectedSize,   setSelectedSize]   = useState(null)
  const [paymentOpen,    setPaymentOpen]    = useState(false)
  const [completeLookOpen, setCompleteLookOpen] = useState(false)
  const [preselectedLookItemId, setPreselectedLookItemId] = useState(null)
  const [infoTab,        setInfoTab]        = useState(null)

  const handleOpenCompleteLook = () => {
    setPreselectedLookItemId(null)
    setCompleteLookOpen(true)
  }

  const handleOpenCompleteLookItem = (item) => {
    setPreselectedLookItemId(item.id)
    setCompleteLookOpen(true)
  }

  return (
    <>
      <ImpactBanner />
      <Header />
      <div className={styles.page}>
      <div className={styles.twoCol}>
        <div className={styles.colLeft}>
          <ProductImage src={selectedColor.img} images={selectedColor.images} alt={`Impact Bandeau Strappy Bra – ${selectedColor.name}`} model={selectedColor.model} onModelClick={() => setInfoTab('model')} showBreadcrumb />
        </div>

        <div className={styles.colRight}>
          <ProductInfo onOpenReviews={() => setInfoTab('reviews')} showFeatures={false} hideBreadcrumb />

          <hr className={styles.divider} />

          <ColorSelector
            selectedId={selectedColor.id}
            onChange={setSelectedColor}
          />

          <SizeSelector
            selectedId={selectedSize?.id}
            onChange={setSelectedSize}
          />

          <CartSection
            onOpenPayment={() => setPaymentOpen(true)}
            onOpenCompleteLook={handleOpenCompleteLook}
          />

          <hr className={styles.dividerNoTop} />

          <InfoSection
            onOpen={tab => setInfoTab(tab)}
            onOpenCompleteLook={handleOpenCompleteLook}
            onOpenCompleteLookItem={handleOpenCompleteLookItem}
            featureLayout="button"
          />
        </div>
      </div>

      <ReviewsSection onOpenReviews={() => setInfoTab('reviews')} />

      {/* Modals (position:fixed, DOM location doesn't matter) */}
      <PaymentModal open={paymentOpen} onClose={() => setPaymentOpen(false)} />
      <CompleteLookModal
        open={completeLookOpen}
        onClose={() => {
          setCompleteLookOpen(false)
          setPreselectedLookItemId(null)
        }}
        currentSize={selectedSize?.label ?? ''}
        preselectedItemId={preselectedLookItemId}
        onChangeCurrentSize={(sizeLabel) => {
          setSelectedSize(sizeLabel ? SIZES.find(size => size.label === sizeLabel) ?? null : null)
        }}
      />

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
