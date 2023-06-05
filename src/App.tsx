import './App.css';
import { Route, Link, Routes } from 'react-router-dom'
import Store from './Components/Store';
import ProductDetails from './Components/ProductDetails';
//Context
import ProductContextProvider from './context/ProductContextProvider';
import CartContextProvider from './context/CartContextProvider';

function App() {
  return (
    <>
      <ProductContextProvider>
        <CartContextProvider>
          <Routes>
            <Route path='/products/:id' element={<ProductDetails />} />
            <Route path='/products' element={<Store />} />
            {/* <Route path='/card' /> */}
            {/* <Route path='/*'  element/> */}
          </Routes>
        </CartContextProvider>
      </ProductContextProvider>

    </>
  );
}

export default App;
