import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../context/CartContextProvider'
const Navbar = () => {
  const { state } = useContext(CartContext);
  return (
    <nav>
      <Link to='/products'>Products</Link>
      <Link to='/cart'>Cart <span>{state.itemsCounter}</span></Link>
    </nav>
  )
}

export default Navbar
