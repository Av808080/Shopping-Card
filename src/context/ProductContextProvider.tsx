import React, { useEffect, useState } from 'react'
//API
import { fetchData } from '../services/API'
//TYPE
import Product from '../Types/ProductType';

type Props = {
    children: React.ReactNode;
}

export const ProductContext = React.createContext< Product[]>([]);

const ProductContextProvider = ({ children }: Props) => {
    const [products, setProducts] = useState<Product[]>([]);
    const getProducts = async()=>{
        setProducts(await fetchData())
    }

    useEffect(() => {
       getProducts()
    }, [])
    return (
        <ProductContext.Provider value={products}>
            {children}
        </ProductContext.Provider>
    )
}

export default ProductContextProvider
