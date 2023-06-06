import { Action } from "../../Types/CartContextTypes";
type Props = {
    details: {
        image: string;
        title: string;
        price: number;
        quantity: number;
        id: number
    }
    dispatch: (action: Action) => void
}
const BoughtItems = (props: Props) => {
    const { dispatch } = props
    const { image, title, price, quantity, id } = props.details;
    return (
        <div style={{ display: "flex" }}>
            <img src={image} width={100} alt={title} />
            <div>
                <h3>{title.split(" " , 2).join(" ")}</h3>
                <p>{price}</p>
            </div>
            <p>{quantity}</p>
            <div>
                {quantity === 1 ? <button onClick={() => dispatch({ type: "DECREASE", payload: { id, image, price, title } })} >Trash</button> :
                    <button onClick={() => dispatch({ type: "DECREASE", payload: { id, image, price, title } })}> - </button>}
                <button onClick={() => dispatch({ type: "INCREASE", payload: { id, image, price, title } })}>+</button>
            </div>
        </div>
    )
}

export default BoughtItems
