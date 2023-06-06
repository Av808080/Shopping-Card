import React, { useContext } from 'react'
import { CartContext } from '../../context/CartContextProvider';
import { useNavigate } from 'react-router-dom'

const Checkout = () => {
    const cartContext = useContext(CartContext);
    const { dispatch, state: { total, itemsCounter, isCheckOut } } = cartContext;
    const navigate = useNavigate();
    return (
        <div>
            {(isCheckOut ? <>
                    <p>Checkout successfully</p>
                    <button onClick={() => navigate("/products ", { replace: true })}>Buy more</button>
                </>:itemsCounter === 0 ? <>
                <h3>Want to buy?</h3> <button onClick={() => navigate("/products", { replace: true })}> GO to Shop</button> </>
                  : <>
                    <p>
                        Total Payments : {total.toFixed(2)} <br />
                    </p>
                    <p>
                        Total Items : {itemsCounter}
                    </p>
                    <div>
                        <button onClick={() => dispatch({ type: 'CLEAR' })}>Clear</button>
                        <button onClick={() => dispatch({ type: 'CHECKOUT' })}>Checkout</button>
                   </div>
                </>)
            }
        </div>
    )
}

export default Checkout
