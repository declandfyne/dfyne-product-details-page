import { useState } from 'react'
import { COLORS, SIZES } from './data/product'

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

import styles from './App.module.css'

const DEFAULT_COLOR = COLORS.find(c => c.id === 'truffle')
const DEFAULT_SIZE  = SIZES.find(s => s.id === 'xs')

export default function App() {
  const [selectedColor,  setSelectedColor]  = useState(DEFAULT_COLOR)
  const [selectedSize,   setSelectedSize]   = useState(DEFAULT_SIZE)
  const [paymentOpen,    setPaymentOpen]    = useState(false)
  const [infoTab,        setInfoTab]        = useState(null)

  return (
    <div className={styles.page}>
      <Header />
      <ImpactBanner />

      <ProductImage src={selectedColor.img} alt={`Longline Strappy Top – ${selectedColor.name}`} model={selectedColor.model} onModelClick={() => setInfoTab('model')} />

      <ProductInfo />

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

      <InfoSection onOpen={tab => setInfoTab(tab)} />

      <InfoModal
        open={infoTab !== null}
        activeTab={infoTab}
        onClose={() => setInfoTab(null)}
      />

      <hr className={styles.divider} />

      <CompleteLook />

      <div className={styles.bottomPad} />
    </div>
  )
}
