import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Product from './page/Product'
import Home from './page/Home'
import Category from './page/Category'
import Footer from './components/Footer'
import Cart from './page/Cart'
import Login from './page/Login'

function App() {
  const [count, setCount] = useState(0)

  return (
    <main className='text-tertiary'>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/clothing' element={<Category />} />
          <Route path='/cosmetics' element={<Category />} />
          <Route path='/electronics' element={<Category />} />
          <Route path='/product' element={<Category />}>
            <Route path=':productId' element={<Product />} />  
          </Route>
          <Route path='/cart-page' element={<Cart />} />
          <Route path='/login' element={<Login />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </main>
  )
}

export default App
