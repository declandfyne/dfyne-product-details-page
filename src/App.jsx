import { useState } from 'react'
import V1 from './V1'
import V2 from './V2'
import V3 from './V3'

const VERSIONS = [
  { id: 1, label: 'V1' },
  { id: 2, label: 'V2' },
  { id: 3, label: 'V3' },
]

export default function App() {
  const [version, setVersion] = useState(1)
  const [showSwitcher, setShowSwitcher] = useState(true)

  return (
    <>
      {version === 1 && <V1 />}
      {version === 2 && <V2 />}
      {version === 3 && <V3 />}

      {showSwitcher && (
        <div style={switcher}>
          {VERSIONS.map(v => (
            <button
              key={v.id}
              onClick={() => setVersion(v.id)}
              style={{
                ...pill,
                ...(version === v.id ? pillActive : {}),
              }}
            >
              {v.label}
            </button>
          ))}
          <button onClick={() => setShowSwitcher(false)} style={closeBtn}>
            ✕
          </button>
        </div>
      )}

      {!showSwitcher && (
        <button
          onClick={() => setShowSwitcher(true)}
          style={fab}
        >
          V{version}
        </button>
      )}
    </>
  )
}

const switcher = {
  position: 'fixed',
  bottom: 24,
  left: '50%',
  transform: 'translateX(-50%)',
  display: 'flex',
  gap: 6,
  background: '#111',
  borderRadius: 999,
  padding: '6px 8px',
  zIndex: 9999,
  boxShadow: '0 4px 20px rgba(0,0,0,0.3)',
}

const pill = {
  border: 'none',
  borderRadius: 999,
  padding: '8px 18px',
  fontSize: 13,
  fontWeight: 600,
  cursor: 'pointer',
  background: 'transparent',
  color: '#888',
  transition: 'all 0.2s',
}

const pillActive = {
  background: '#fff',
  color: '#111',
}

const closeBtn = {
  border: 'none',
  background: 'transparent',
  color: '#666',
  fontSize: 14,
  cursor: 'pointer',
  padding: '8px 6px',
  marginLeft: 2,
}

const fab = {
  position: 'fixed',
  bottom: 24,
  right: 24,
  width: 44,
  height: 44,
  borderRadius: '50%',
  border: 'none',
  background: '#111',
  color: '#fff',
  fontSize: 13,
  fontWeight: 700,
  cursor: 'pointer',
  zIndex: 9999,
  boxShadow: '0 4px 20px rgba(0,0,0,0.3)',
}
