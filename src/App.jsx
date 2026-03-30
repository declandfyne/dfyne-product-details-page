import { BrowserRouter, Routes, Route } from 'react-router-dom'
import CollectionPage from './CollectionPage'
import V2 from './V2'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<V2 />} />
        <Route path="/product" element={<V2 />} />
        <Route path="/collection" element={<CollectionPage />} />
      </Routes>
    </BrowserRouter>
  )
}
