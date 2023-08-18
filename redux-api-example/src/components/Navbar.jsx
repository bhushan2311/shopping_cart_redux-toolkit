import React from 'react'
import { Link } from 'react-router-dom';
import '../index.css';
const Navbar = (props) => {
    return (
        <nav className='nav'>
            <div className="head">CartApp</div>
            <div className="options">
                <ul className="lists">
                    <li >
                        <Link to="/"> Products</Link>
                    </li>
                    <li>
                        <Link to="/cart">Cart [{props.totalItems}]</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar