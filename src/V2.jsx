import { useEffect, useRef, useState } from 'react'
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
import RelatedRangesSection from './components/RelatedRangesSection'
import V2TabbedModal from './components/V2TabbedModal'
import InfoModal     from './components/InfoModal'
import CompleteLookModal from './components/CompleteLookModal'
import PaymentModal  from './components/PaymentModal'

import styles from './page.module.css'

const DEFAULT_COLOR = COLORS.find(c => c.id === 'midnight-black')
const DEFAULT_DESKTOP_GUTTER = 24
const MIN_DESKTOP_GUTTER = 0
const MAX_DESKTOP_GUTTER = 250
const DEFAULT_INFO_COLUMN_WIDTH = 550
const MIN_INFO_COLUMN_WIDTH = 360
const MAX_INFO_COLUMN_WIDTH = 760

export default function V2() {
  const [selectedColor,  setSelectedColor]  = useState(DEFAULT_COLOR)
  const [selectedSize,   setSelectedSize]   = useState(null)
  const [paymentOpen,    setPaymentOpen]    = useState(false)
  const [completeLookOpen, setCompleteLookOpen] = useState(false)
  const [preselectedLookItemId, setPreselectedLookItemId] = useState(null)
  const [infoTab,        setInfoTab]        = useState(null)
  const [layoutControlOpen, setLayoutControlOpen] = useState(false)
  const [desktopGutter, setDesktopGutter] = useState(DEFAULT_DESKTOP_GUTTER)
  const [infoColumnWidth, setInfoColumnWidth] = useState(DEFAULT_INFO_COLUMN_WIDTH)
  const [rightRailStickyTop, setRightRailStickyTop] = useState(0)
  const layoutControlRef = useRef(null)
  const rightRailRef = useRef(null)

  useEffect(() => {
    const media = window.matchMedia('(min-width: 1024px)')
    const RIGHT_RAIL_BOTTOM_GAP = 20
    let frameId = null

    const update = () => {
      if (!media.matches || !rightRailRef.current) {
        setRightRailStickyTop(0)
        return
      }

      const railHeight = rightRailRef.current.getBoundingClientRect().height
      setRightRailStickyTop(Math.round(window.innerHeight - railHeight - RIGHT_RAIL_BOTTOM_GAP))
    }

    const scheduleUpdate = () => {
      if (frameId) cancelAnimationFrame(frameId)
      frameId = requestAnimationFrame(update)
    }

    scheduleUpdate()
    window.addEventListener('resize', scheduleUpdate)
    media.addEventListener('change', scheduleUpdate)

    const observer = new ResizeObserver(scheduleUpdate)
    if (rightRailRef.current) observer.observe(rightRailRef.current)

    return () => {
      if (frameId) cancelAnimationFrame(frameId)
      window.removeEventListener('resize', scheduleUpdate)
      media.removeEventListener('change', scheduleUpdate)
      observer.disconnect()
    }
  }, [])

  useEffect(() => {
    if (!layoutControlOpen) return undefined

    const handlePointerDown = (event) => {
      if (layoutControlRef.current && !layoutControlRef.current.contains(event.target)) {
        setLayoutControlOpen(false)
      }
    }

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setLayoutControlOpen(false)
      }
    }

    document.addEventListener('mousedown', handlePointerDown)
    document.addEventListener('keydown', handleKeyDown)

    return () => {
      document.removeEventListener('mousedown', handlePointerDown)
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [layoutControlOpen])

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
      <div
        style={{
          '--desktop-page-side-gutter': `${desktopGutter}px`,
          '--desktop-info-column-width': `${infoColumnWidth}px`,
        }}
      >
        <ImpactBanner />
        <Header />

        <div
          className={styles.layoutOverlay}
          id="pdp-layout-control"
          data-analytics-id="pdp-layout-control"
          ref={layoutControlRef}
        >
          <button
            type="button"
            className={styles.layoutButton}
            aria-controls="desktop-gutter-panel"
            aria-expanded={layoutControlOpen}
            onClick={() => setLayoutControlOpen(prev => !prev)}
          >
            Layout
          </button>

          {layoutControlOpen && (
            <div className={styles.layoutPopover} id="desktop-gutter-panel">
              <div className={styles.layoutControlHeader}>
                <label className={styles.layoutControlLabel} htmlFor="desktop-gutter-range">Desktop gutter</label>
                <output className={styles.layoutControlValue} htmlFor="desktop-gutter-range">{desktopGutter}px</output>
              </div>

              <input
                id="desktop-gutter-range"
                className={styles.layoutControlRange}
                type="range"
                min={MIN_DESKTOP_GUTTER}
                max={MAX_DESKTOP_GUTTER}
                step="1"
                value={desktopGutter}
                onChange={(event) => setDesktopGutter(Number(event.target.value))}
                aria-describedby="desktop-gutter-range-scale"
              />

              <div className={styles.layoutControlScale} id="desktop-gutter-range-scale" aria-hidden="true">
                <span>Full bleed</span>
                <span>250px</span>
              </div>

              <div className={styles.layoutSectionDivider} />

              <div className={styles.layoutControlHeader}>
                <label className={styles.layoutControlLabel} htmlFor="desktop-info-column-range">Info column</label>
                <output className={styles.layoutControlValue} htmlFor="desktop-info-column-range">{infoColumnWidth}px</output>
              </div>

              <input
                id="desktop-info-column-range"
                className={styles.layoutControlRange}
                type="range"
                min={MIN_INFO_COLUMN_WIDTH}
                max={MAX_INFO_COLUMN_WIDTH}
                step="1"
                value={infoColumnWidth}
                onChange={(event) => setInfoColumnWidth(Number(event.target.value))}
                aria-describedby="desktop-info-column-range-scale"
              />

              <div className={styles.layoutControlScale} id="desktop-info-column-range-scale" aria-hidden="true">
                <span>Wider images</span>
                <span>Wider info</span>
              </div>
            </div>
          )}
        </div>

        <div className={styles.page} id="pdp-page" data-analytics-id="pdp-page">
        <div className={styles.twoCol} id="pdp-main-content" data-analytics-id="pdp-main-content">
          <div className={styles.colLeft} id="pdp-media-column" data-analytics-id="pdp-media-column">
            <ProductImage src={selectedColor.img} images={selectedColor.images} alt={`Impact Bandeau Strappy Bra – ${selectedColor.name}`} model={selectedColor.model} onModelClick={() => setInfoTab('model')} showBreadcrumb />
          </div>

          <div
            className={styles.colRight}
            id="pdp-info-column"
            data-analytics-id="pdp-info-column"
            ref={rightRailRef}
            style={{ '--sticky-top': `${rightRailStickyTop}px` }}
          >
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
        <RelatedRangesSection />

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
      </div>
    </>
  )
}
