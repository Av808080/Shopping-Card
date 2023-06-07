import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
// import { ProductContext } from '../context/ProductContextProvider';
import Product from '../Types/ProductType';
import axios from 'axios';

const ProductDetails = () => {
    const { id } = useParams();
    const [product, setProduct] = useState({} as Product)
    // const productDetail = useContext<Product[]>(ProductContext)
    // const product = productDetail[+id! - 1];
    useEffect(() => {
        axios.get("https://fakestoreapi.com/products/" + id)
            .then(data => setProduct(data.data));
    }
        , [])



    return (
        <div>
            <p>{product.title}</p>
            <img src={product.image} alt={product.title} />
            <div>
                <h3>{product.title}</h3>
                <p>{product.description}</p>
                <p>{product.category}</p>
                <div><span>{ }</span>
                    <Link to='/products'>Back to Shop</Link>
                </div>
            </div>
        </div>
    )
}

export default ProductDetails
