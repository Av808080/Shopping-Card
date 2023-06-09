import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../context/CartContextProvider'
import styles from './Sass/Navbar.module.scss'
const Navbar = () => {
  const { state } = useContext(CartContext);
  return (
    <nav className={styles.navbar}>
      <Link className={styles.link} to='/products'>Products</Link>
      <Link className={styles.link}to='/cart'>Cart <span>{state.itemsCounter}</span></Link>
    </nav>
  )
}

export default Navbar
