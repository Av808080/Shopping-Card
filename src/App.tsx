import React from 'react';
import './App.css';
import Store from './Components/Store';
//Context
import ProductContextProvider from './context/ProductContextProvider';
function App() {
  return (
    <>
      <ProductContextProvider>
        <Store />
      </ProductContextProvider>

    </>
  );
}

export default App;
