import { useState } from 'react'
import { COLORS, SIZES, ASSETS } from './data/product'

import Header        from './components/Header'
import ImpactBanner  from './components/ImpactBanner'
import ProductImage  from './components/ProductImage'
import ProductInfo   from './components/ProductInfo'
import ColorSelector from './components/ColorSelector'
import SizeSelector  from './components/SizeSelector'
import CartSection   from './components/CartSection'
import InfoSection   from './components/InfoSection'
import InfoModal     from './components/InfoModal'
import CompleteLook  from './components/CompleteLook'
import PaymentModal  from './components/PaymentModal'

import styles from './V1.module.css'

const DEFAULT_COLOR = COLORS.find(c => c.id === 'midnight-black')
const DEFAULT_SIZE  = SIZES.find(s => s.id === 'xs')

export default function V1() {
  const [selectedColor,  setSelectedColor]  = useState(DEFAULT_COLOR)
  const [selectedSize,   setSelectedSize]   = useState(DEFAULT_SIZE)
  const [paymentOpen,    setPaymentOpen]    = useState(false)
  const [infoTab,        setInfoTab]        = useState(null)

  return (
    <div className={styles.page}>
      <Header />
      <ImpactBanner />

      <ProductImage src={selectedColor.img} images={selectedColor.images} alt={`Longline Strappy Top – ${selectedColor.name}`} model={selectedColor.model} onModelClick={() => setInfoTab('model')} />

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

      <PaymentModal open={paymentOpen} onClose={() => setPaymentOpen(false)} />

      <hr className={styles.dividerNoTop} />

      <InfoSection onOpen={tab => setInfoTab(tab)} onOpenReviews={() => setInfoTab('reviews')} featureLayout={selectedColor.id === 'navy' ? 'hidden' : (selectedColor.id === 'teal' || selectedColor.id === 'midnight-black') ? 'standalone' : selectedColor.id === 'truffle' ? 'standalone-pills' : 'button'} />

      <InfoModal
        open={infoTab !== null}
        activeTab={infoTab}
        onClose={() => setInfoTab(null)}
        model={selectedColor.model}
        productImg={ASSETS.modelPhoto}
      />

      <hr className={styles.divider} />

      <CompleteLook />

      <div className={styles.bottomPad} />
    </div>
  )
}
