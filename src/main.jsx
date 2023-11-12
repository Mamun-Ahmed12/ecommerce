import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'milligram/dist/milligram.css'
import './assets/css/style.css'
import './component/Header.css'
import ShopContextProvider from './component/context/ShopContext'




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <ShopContextProvider>
  <App />
  </ShopContextProvider>
  </React.StrictMode>
 
)
