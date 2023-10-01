import React, { useContext } from 'react';
import logo from '../../images/Logo.svg'
import './Header.css'
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/UserContext';

const Header = () => {
    const { user, logOut } = useContext(AuthContext)
    return (
        <nav className='header'>
            <img src={logo} alt="" />
            <div>
                <Link to="/">Shop</Link>
                <Link to="/orders">Order</Link>
                <Link to="/inventory">Inventory</Link>
                <Link to="/about">About</Link>
                {
                    user?.uid ?
                        <button onClick={logOut}>Sign Out</button>
                        :
                        <>
                            <Link to="/login">LogIn</Link>
                            <Link to="/signup">Sign Up</Link>
                        </>
                }

                {/* <span>{user?.email}</span> */}
            </div>
        </nav>
    );
};

export default Header;