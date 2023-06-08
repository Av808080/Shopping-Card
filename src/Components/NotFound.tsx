import { Link } from 'react-router-dom';
import Notfound from '../assets/PageNotFound.png'
import styles from './Sass/NotFound.module.scss'

const NotFound = () => {
    document.title = "Page Not Found"
    return (
        <>
            <img className={styles.img} src={Notfound} alt="404" />
            <div className={styles.text}>
                <h3 className={styles.alert}>
                    Page Not Found
                </h3>
                <Link className={styles.backLink} to='/products'>Back to Shop</Link>
            </div>
        </>
    )
}

export default NotFound
