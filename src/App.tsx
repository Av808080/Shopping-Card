import './App.css';
import { Route, Link, Routes } from 'react-router-dom'
import Store from './Components/Store';
import ProductDetails from './Components/ProductDetails';
//Context
import ProductContextProvider from './context/ProductContextProvider';
import CartContextProvider from './context/CartContextProvider';
import Navbar from './Components/Navbar';
import Cart from './Components/ShopCart';
import NotFound from './Components/NotFound';

function App() {
  return (
    <>
      <ProductContextProvider>
        <CartContextProvider>
          <Navbar />
          <Routes>
            <Route path='/products/:id' element={<ProductDetails />} />
            <Route path='/products' element={<Store />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/*' element={<NotFound />} />
          </Routes>
        </CartContextProvider>
      </ProductContextProvider>

    </>
  );
}

export default App;
