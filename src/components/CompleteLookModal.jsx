import { useState, useEffect } from 'react'
import { ASSETS } from '../data/product'
import { LOOK_ITEMS } from '../data/product'
import styles from './CompleteLookModal.module.css'

const CloseIcon = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
    <path d="M1 1L13 13M13 1L1 13" stroke="#0a0a0a" strokeWidth="1.4" strokeLinecap="round" />
  </svg>
)

const CheckIcon = () => (
  <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden="true">
    <path d="M2 5.2L4.1 7.3L8 3.4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

const createInitialSelection = () => ({ step: 'idle', size: '', length: '' })

const createSelectionForItem = (item) => ({
  step: item.lengths?.length ? 'length' : 'size',
  size: '',
  length: '',
})

function SelectedThumbnail({ item, onRemove, removable = true }) {
  return (
    <div className={styles.selectedThumb} data-analytics-id="complete-look-selected-item" data-look-item-id={item.id} data-look-item-name={item.name}>
      <img src={item.img} alt={item.name} className={styles.selectedThumbImg} />
      {removable && (
        <button
          type="button"
          className={styles.selectedThumbRemove}
          aria-label={`Remove ${item.name}`}
          onClick={() => onRemove(item.id)}
          data-analytics-id="complete-look-remove-selected-item"
        >
          <CloseIcon />
        </button>
      )}
    </div>
  )
}

function CurrentlyViewingCard({ item, selectedSize, isEditing, onSelectSize, onEdit }) {
  return (
    <div className={styles.currentCard} id="complete-look-current-item" data-analytics-id="complete-look-current-item">
      <div className={styles.currentImageWrap}>
        <img src={item.img} alt={item.name} className={styles.currentImg} />
      </div>
      <div className={styles.currentInfo}>
        <span className={styles.viewingLabel}>
          <span className={styles.viewingDot} aria-hidden="true" />
          CURRENTLY VIEWING
        </span>
        <p className={styles.currentName}>{item.name}</p>
        <p className={styles.currentColor}>{item.color.toUpperCase()}</p>
        <p className={styles.currentPrice}>{item.price}</p>

        {isEditing ? (
          <>
            <p className={styles.selectSizeLabel}>
              SELECT SIZE:
              {selectedSize && <span className={styles.selectedValue}> {selectedSize}</span>}
            </p>
            <div className={styles.sizeButtons}>
              {item.sizes.map(size => (
                <button
                  type="button"
                  key={size}
                  className={`${styles.sizeBtn} ${selectedSize === size ? styles.sizeBtnActive : ''}`}
                  aria-pressed={selectedSize === size}
                  onClick={() => onSelectSize(size)}
                  data-analytics-id="complete-look-current-size"
                  data-size-label={size}
                  data-selected={selectedSize === size}
                >
                  {size}
                </button>
              ))}
            </div>
          </>
        ) : (
          <div className={styles.selectionSummary}>
            <button type="button" className={styles.summaryPill} onClick={onEdit} data-analytics-id="complete-look-current-size-summary">
              <span className={styles.summaryPillContent}>
                <CheckIcon />
                <span>{selectedSize}</span>
              </span>
            </button>
            <button type="button" className={styles.editHint} onClick={onEdit} data-analytics-id="complete-look-current-edit">EDIT</button>
          </div>
        )}
      </div>
    </div>
  )
}

function LookItemCard({ item, selection, onStart, onSelectSize, onSelectLength, onEditLength, onEditSize, onReset }) {
  const hasLength = item.lengths && item.lengths.length > 0
  const isIdle = selection.step === 'idle'
  const showLengthSelector = selection.step === 'length'
  const showSizeSelector = selection.step === 'size'
  const isComplete = selection.step === 'complete'

  return (
    <div className={styles.itemCard} id={`complete-look-modal-item-${item.id}`} data-analytics-id="complete-look-modal-item" data-look-item-id={item.id} data-look-item-name={item.name}>
      <div className={styles.itemImageWrap}>
        <img src={item.img} alt={item.name} className={styles.itemImg} />
      </div>
      <div className={styles.itemInfo}>
        <div className={styles.itemHeader}>
          <div>
            <p className={styles.itemName}>{item.name}</p>
            <p className={styles.itemColor}>{item.color.toUpperCase()}</p>
          </div>
          {isIdle && (
            <div className={styles.itemRight}>
              <button type="button" className={styles.addBtn} onClick={() => onStart(item)} data-analytics-id="complete-look-item-add" data-look-item-id={item.id}>
                ADD
              </button>
            </div>
          )}
          {!isIdle && (
            <div className={styles.itemActions}>
              <span className={styles.itemPrice}>{item.price}</span>
              <button
                type="button"
                className={styles.resetBtn}
                aria-label={`Reset ${item.name}`}
                onClick={() => onReset(item.id)}
                data-analytics-id="complete-look-item-reset"
                data-look-item-id={item.id}
              >
                <CloseIcon />
              </button>
            </div>
          )}
        </div>

        {showSizeSelector && !hasLength && !showLengthSelector && (
          <>
            <p className={styles.selectSizeLabel}>
              SELECT SIZE:
              {selection.size && <span className={styles.selectedValue}> {selection.size}</span>}
            </p>
            <div className={styles.sizeButtons}>
              {item.sizes.map(size => (
                <button
                  type="button"
                  key={size}
                  className={`${styles.sizeBtn} ${selection.size === size ? styles.sizeBtnActive : ''}`}
                  aria-pressed={selection.size === size}
                  onClick={() => onSelectSize(item.id, size)}
                  data-analytics-id="complete-look-item-size"
                  data-look-item-id={item.id}
                  data-size-label={size}
                  data-selected={selection.size === size}
                >
                  {size}
                </button>
              ))}
            </div>
          </>
        )}

        {showSizeSelector && hasLength && selection.length && (
          <>
            <p className={styles.selectSizeLabel}>
              <span className={styles.selectedValue}>{selection.length}</span>
              {' - SELECT SIZE:'}
              {selection.size && <span className={styles.selectedValue}> {selection.size}</span>}
              <button type="button" className={styles.clearLength} onClick={() => onSelectLength(item.id, null)} data-analytics-id="complete-look-item-clear-length" data-look-item-id={item.id}>
                <CloseIcon />
              </button>
            </p>
            <div className={styles.sizeButtons}>
              {item.sizes.map(size => (
                <button
                  type="button"
                  key={size}
                  className={`${styles.sizeBtn} ${selection.size === size ? styles.sizeBtnActive : ''}`}
                  aria-pressed={selection.size === size}
                  onClick={() => onSelectSize(item.id, size)}
                  data-analytics-id="complete-look-item-size"
                  data-look-item-id={item.id}
                  data-size-label={size}
                  data-selected={selection.size === size}
                >
                  {size}
                </button>
              ))}
            </div>
          </>
        )}

        {showLengthSelector && (
          <>
            <p className={styles.selectSizeLabel}>SELECT LENGTH:</p>
            <div className={styles.lengthButtons}>
              {item.lengths.map(length => (
                <button
                  type="button"
                  key={length}
                  className={`${styles.lengthBtn} ${selection.length === length ? styles.lengthBtnActive : ''}`}
                  aria-pressed={selection.length === length}
                  onClick={() => onSelectLength(item.id, length)}
                  data-analytics-id="complete-look-item-length"
                  data-look-item-id={item.id}
                  data-length-label={length}
                  data-selected={selection.length === length}
                >
                  {length}
                </button>
              ))}
            </div>
          </>
        )}

        {isComplete && (
          <div className={styles.selectionSummary}>
            <button type="button" className={styles.summaryPill} onClick={() => onEditSize(item.id)} data-analytics-id="complete-look-item-selection-summary" data-look-item-id={item.id}>
              <span className={styles.summaryPillContent}>
                <CheckIcon />
                <span>{hasLength ? `${selection.length} / ${selection.size}` : selection.size}</span>
              </span>
            </button>
            <button type="button" className={styles.editHint} onClick={() => onEditSize(item.id)} data-analytics-id="complete-look-item-edit" data-look-item-id={item.id}>EDIT</button>
          </div>
        )}

        {isIdle && (
          <p className={styles.itemPriceBelow}>{item.price}</p>
        )}
      </div>
    </div>
  )
}

export default function CompleteLookModal({ open, onClose, currentSize = '', onChangeCurrentSize, preselectedItemId = null }) {
  const currentItem = LOOK_ITEMS.find(i => i.current)
  const otherItems = LOOK_ITEMS.filter(i => !i.current)

  const [isCurrentEditing, setIsCurrentEditing] = useState(!currentSize)
  const [selections, setSelections] = useState(() =>
    Object.fromEntries(otherItems.map(i => [i.id, createInitialSelection()]))
  )

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [open])

  useEffect(() => {
    if (!open) {
      setSelections(Object.fromEntries(otherItems.map(i => [i.id, createInitialSelection()])))
    }
  }, [open])

  useEffect(() => {
    if (!open || !preselectedItemId) return

    const targetItem = otherItems.find(item => item.id === preselectedItemId)
    if (!targetItem) return

    setSelections(prev => ({
      ...prev,
      [targetItem.id]: createSelectionForItem(targetItem),
    }))
  }, [open, preselectedItemId])

  useEffect(() => {
    if (open) {
      setIsCurrentEditing(!currentSize)
    }
  }, [open, currentSize])

  useEffect(() => {
    if (!open) return undefined

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') onClose()
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [open, onClose])

  if (!open) return null

  const handleStartItem = (item) => {
    setSelections(prev => ({
      ...prev,
      [item.id]: createSelectionForItem(item)
    }))
  }

  const handleCurrentSize = (size) => {
    onChangeCurrentSize?.(size)
    setIsCurrentEditing(false)
  }

  const handleResetCurrentItem = () => {
    onChangeCurrentSize?.('')
    setIsCurrentEditing(true)
  }

  const handleSelectSize = (id, size) => {
    setSelections(prev => ({
      ...prev,
      [id]: {
        ...prev[id],
        step: 'complete',
        size,
      }
    }))
  }

  const handleSelectLength = (id, length) => {
    setSelections(prev => ({
      ...prev,
      [id]: length
        ? { ...prev[id], step: 'size', length, size: '' }
        : { ...prev[id], step: 'length', length: '', size: '' }
    }))
  }

  const handleEditLength = (id) => {
    setSelections(prev => ({
      ...prev,
      [id]: { ...prev[id], step: 'length', size: '' }
    }))
  }

  const handleEditSize = (id) => {
    setSelections(prev => ({
      ...prev,
      [id]: { ...prev[id], step: 'size' }
    }))
  }

  const handleResetItem = (id) => {
    setSelections(prev => ({
      ...prev,
      [id]: createInitialSelection()
    }))
  }

  const hasCurrentProductSelected = Boolean(currentSize)
  const selectedItems = otherItems.filter(i => selections[i.id].size)
  const selectedCount = selectedItems.length + (hasCurrentProductSelected ? 1 : 0)
  const subtotal = selectedItems.reduce((sum, i) => sum + i.priceNum, hasCurrentProductSelected ? currentItem.priceNum : 0)
  const canSubmit = selectedCount > 0
  const title = 'COMPLETE THE LOOK'
  const sectionTitle = 'COMPLETE THE LOOK'

  return (
    <div className={styles.overlay} onClick={onClose} id="complete-look-modal-overlay" data-analytics-id="complete-look-modal-overlay">
      <div className={styles.sheet} onClick={e => e.stopPropagation()} id="complete-look-modal" data-analytics-id="complete-look-modal">
        <div className={styles.header} id="complete-look-modal-header" data-analytics-id="complete-look-modal-header">
          <h2 className={styles.headerTitle}>{title}</h2>
          <button className={styles.closeBtn} onClick={onClose} aria-label="Close" id="complete-look-modal-close" data-analytics-id="complete-look-modal-close">
            <CloseIcon />
          </button>
        </div>

        <div className={styles.content} id="complete-look-modal-content" data-analytics-id="complete-look-modal-content">
          {currentItem && (
            <CurrentlyViewingCard
              item={currentItem}
              selectedSize={currentSize}
              isEditing={isCurrentEditing || !currentSize}
              onSelectSize={handleCurrentSize}
              onEdit={() => setIsCurrentEditing(true)}
            />
          )}

          <div className={styles.sectionHeader} id="complete-look-modal-list-header" data-analytics-id="complete-look-modal-list-header">
            <span className={styles.sectionTitle}>{sectionTitle}</span>
            <span className={styles.sectionCount}>{otherItems.length} ITEMS</span>
          </div>

          <div className={styles.itemList} id="complete-look-modal-list" data-analytics-id="complete-look-modal-list">
            {otherItems.map(item => (
              <LookItemCard
                key={item.id}
                item={item}
                selection={selections[item.id]}
                onStart={handleStartItem}
                onSelectSize={handleSelectSize}
                onSelectLength={handleSelectLength}
                onEditLength={handleEditLength}
                onEditSize={handleEditSize}
                onReset={handleResetItem}
              />
            ))}
          </div>
        </div>

        <div className={styles.footer} id="complete-look-modal-footer" data-analytics-id="complete-look-modal-footer">
          {selectedCount > 0 && (
            <div className={styles.selectedThumbRow} id="complete-look-selected-items" data-analytics-id="complete-look-selected-items">
              {hasCurrentProductSelected && currentItem && (
                <SelectedThumbnail item={currentItem} onRemove={handleResetCurrentItem} />
              )}
              {selectedItems.map(item => (
                <SelectedThumbnail key={item.id} item={item} onRemove={handleResetItem} />
              ))}
            </div>
          )}
          <div className={styles.footerInfo}>
            <span className={styles.footerCount}>{selectedCount} items selected</span>
            <span className={styles.footerSubtotal}>
              Subtotal: {selectedCount > 0 ? `$${subtotal.toFixed(2)}` : ''}
            </span>
          </div>
          <button
            type="button"
            className={`${styles.ctaBtn} ${canSubmit ? styles.ctaBtnActive : ''}`}
            id="complete-look-modal-submit"
            data-analytics-id="complete-look-modal-submit"
            data-enabled={canSubmit}
          >
            {canSubmit ? 'ADD SELECTED ITEMS TO CART' : 'SELECT SIZES'}
          </button>
          <p className={styles.footerMeta}>
            <img src={ASSETS.klarna} alt="Klarna" className={styles.footerLogo} />
            Pay in 3 interest-free installments.
            <button type="button" className={styles.learnMoreBtn} data-analytics-id="complete-look-modal-learn-more">Learn more</button>
          </p>
        </div>
      </div>
    </div>
  )
}
