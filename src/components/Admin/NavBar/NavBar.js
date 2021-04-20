import React, { useContext } from 'react';
import logo from '../../../Images/go-movers_full_1599426980.jpg';
import './NavBar.css';
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../App';
const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg shadow-sm">
                <div className="container-fluid">
                    <div className="navbar-collapse" >
                        <ul className="navbar-nav m-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="navbar-brand" to="/home">
                                    <img src={logo} alt='' />
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <p style={{color: '#922c88'}}><AccountCircleOutlinedIcon/> {sessionStorage.getItem('name')}</p>
                </div>
            </nav>
        </>
    );
};

export default Navbar;