import {BrowserRouter, HashRouter, Route, Routes} from 'react-router-dom'
import Home from './pages/Home'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'
import Vlog from './pages/Vlog'
import Portfolio from './pages/Portfolio'
import Shop from './pages/Shop';
import Product from './pages/Product';
import Cart from './pages/Cart';
import Signup from './pages/Signup';
import ShopCategory from './pages/ShopCategory';
import Footer from './component/Footer/footer'
import men_banner from './component/assets/image/banner_mens.png'
import women_banner from './component/assets/image/banner_women.png'
import kid_banner from './component/assets/image/banner_kids.png'
import Header from './component/Header'
import ProductDisplay from './component/productDisplay/ProductDisplay'


function App() {
  return (
    <div>
      <BrowserRouter>
        <Header/>
       <Routes>
        <Route path='/' element={<Shop/>}/>
        <Route path='/mens' element={<ShopCategory banner={men_banner} category='men'/>}/>
        <Route path='/womens' element={<ShopCategory banner={women_banner} category='women'/>}/>
        <Route path='/kids' element={<ShopCategory banner={kid_banner} category='kid'/>}/>
        <Route path='/Contact' element={<Contact />}/>
        <Route path='/Vlog/:facebook/:Youtube' element={<Vlog/>}/>
        <Route path='/Portfolio' element={<Portfolio/>}/>
        {/* <Route path='/*' element={<NotFound />}/> */}
        <Route path='/product' element={<Product/>}/>
        <Route path=':productId' element={<ProductDisplay/>}/>
       
        
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/login' element={<Signup/>}/>
       </Routes>
       <Footer/>
      </BrowserRouter>
    </div>
  )
}

export default App

