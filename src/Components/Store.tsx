import { useContext } from 'react'
import { ProductContext } from '../context/ProductContextProvider'
import Product from '../Types/ProductType';
import Card from './Shared/Card';
const Store = () => {
    const productDetails = useContext<Product[]>(ProductContext);
    return (
        <div>
            <p>
                {productDetails.map(item => { return <Card data={item} key={item.id}></Card> })}

            </p>
        </div>
    )
}

export default Store
