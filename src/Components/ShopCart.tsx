import { useContext } from 'react'
import { CartContext } from '../context/CartContextProvider'
import BoughtItems from './Shared/BoughtItems';
import Checkout from './Shared/Checkout';
const ShopCart = () => {
  const { state, dispatch } = useContext(CartContext);
  const { selectedItems } = state;
  return (
    <div style={{ display: 'flex' }}>
      {selectedItems.map(item => <BoughtItems key={item.id} dispatch={dispatch} details={item} />)}
      <Checkout />
    </div>
  )
}

export default ShopCart
