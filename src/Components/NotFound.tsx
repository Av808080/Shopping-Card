import { Link } from 'react-router-dom';

const NotFound = () => {
    document.title = "Page Not Found"
    return (
        <h3>
            Page Not Found
            <p> 404 Page</p>
            <Link to='/products'>Back to Shop</Link>
        </h3>
    )
}

export default NotFound
