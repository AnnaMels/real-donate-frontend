import {NavLink} from 'react-router-dom';
const Header = () => {
    return (
        <header>
            <nav>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/items">Items</NavLink>
                <NavLink to="/order">Order</NavLink>
            </nav>
        </header>
    )
}

export default Header;