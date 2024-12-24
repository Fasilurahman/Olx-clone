import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home'
import { AuthProvider } from './components/Context/AuthContext'
import ProductDetails from './components/ProductDetails/ProductDetails'; // Adjust path based on your file structure


function App() {

  return (
    <AuthProvider>
      <Routes>
          <Route  path='/' element={<Home />}/>
          <Route path="/product-details/:productId" element={<ProductDetails />} />
      </Routes>
    </AuthProvider>
  )
}

export default App
