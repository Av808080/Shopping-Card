import { useContext } from 'react'
import Product from '../../Types/ProductType'
import { Link } from 'react-router-dom'
import { CartContext } from '../../context/CartContextProvider'
type Props = {
    data: Product
}
const Card = (props: Props) => {
    const cartContext = useContext(CartContext);
    const { title, image, price, id } = props.data;

    return (
        <div>

            <img src={image} alt="" width={100} height={100} />
            <h3>{title.split(" ", 2).join(" ")}</h3>
            <p>{price}</p>
            <div>
                <Link to={`/products/${id}`}>Details</Link>
                <div>
                    <button onClick={() => cartContext.dispatch({ type: "INCREASE", payload: { id, image, price, title } })} >Add to cart</button>
                </div>
            </div>
        </div>
    )
}

export default Card
