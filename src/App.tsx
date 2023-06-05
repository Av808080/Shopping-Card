import React from 'react';
import './App.css';
import { Route, Link, Routes } from 'react-router-dom'
import Store from './Components/Store';
//Context
import ProductContextProvider from './context/ProductContextProvider';
function App() {
  return (
    <>
      <ProductContextProvider>
        <Store />
        <Routes>
          <Route path='/product' element={<Store/>}/>
          <Route path='/product/:id' element />
          <Route path='/card' />
          <Route path='/*'  element/>
        </Routes>
      </ProductContextProvider>

    </>
  );
}

export default App;
