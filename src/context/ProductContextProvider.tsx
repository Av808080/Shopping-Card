import React, { useEffect, useState } from 'react'
//API
import { fetchData } from '../services/API'
//TYPE
import Product from '../Types/ProductType';

type Props = {
    children: React.ReactNode;
}

const ProductContext = React.createContext<null | Product[]>(null);

const ProductContextProvider = ({ children }: Props) => {
    const [products, setProducts] = useState<Product[]>([]);
    useEffect(() => {
        async () => {
            setProducts(await fetchData());
        }
    }, [])
    
    return (
        <ProductContext.Provider value={products}>
            {children}
        </ProductContext.Provider>
    )
}

export default ProductContextProvider
