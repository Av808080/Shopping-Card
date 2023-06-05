import React from 'react'
import Product from '../../Types/ProductType'
type Props = {
    data: Product
}
const Card = (props: Props) => {
    const { title, image, price } = props.data;
    return (
        <div>
            <img src={image} alt="" width={100} height={100}/>
            <h3>{title.split(" " , 2).join(" ")}</h3>
            <p>{price}</p>
            <div>
                <button>details</button>
                <div>
                    <button>Add to cart</button>
                </div>
            </div>
        </div>
    )
}

export default Card
