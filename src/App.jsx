import { BrowserRouter, Routes, Route } from 'react-router-dom'
import CollectionPage from './CollectionPage'
import V2 from './V2'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<CollectionPage />} />
        <Route path="/product" element={<V2 />} />
      </Routes>
    </BrowserRouter>
  )
}
