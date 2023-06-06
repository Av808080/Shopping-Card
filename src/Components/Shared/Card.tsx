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
    // console.log(cartContext.state);

    return (
        <div>
            <img src={image} alt="" width={100} height={100} />
            <h3>{title.split(" ", 2).join(" ")}</h3>
            <p>{price}</p>
            <div>
                <Link to={`/products/${id}`}>Details</Link>
                <div>

                    {
                        cartContext.state.selectedItems.findIndex(item => item.id === id) === -1 ?
                            <button onClick={() => cartContext.dispatch({ type: "INCREASE", payload: { price, id, title, image } })}>Add to cart</button>
                            : cartContext.state.selectedItems[cartContext.state.selectedItems.findIndex(item => item.id === id)].quantity === 1 ?
                            <>
                            <button onClick={() => cartContext.dispatch({ type: "DECREASE", payload: { image, price, title, id } })}> TRASH </button>
                             <button onClick={() => cartContext.dispatch({ type: "INCREASE", payload: { price, id, title, image } })}>+</button>
                                </>
                                : <>
                                    <button onClick={() => cartContext.dispatch({ type: 'DECREASE', payload: { id, image, title, price } })}> - </button>
                                    <button onClick={() => cartContext.dispatch({ type: "INCREASE", payload: { image, price, title, id } })}> + </button>
                                </>
                    }
                </div>
            </div>
        </div>
    )
}

export default Card
