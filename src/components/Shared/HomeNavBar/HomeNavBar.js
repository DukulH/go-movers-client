import React, { useContext, useEffect, useState } from 'react';
import CallOutlinedIcon from '@material-ui/icons/CallOutlined';
import logo from "../../../Images/go-movers_full_1599426980.jpg";
import "./HomeNavBar.css";
import ArrowRightAltOutlinedIcon from '@material-ui/icons/ArrowRightAltOutlined';
import { Link, useHistory } from 'react-router-dom';
import { UserContext } from '../../../App';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { faWindows } from '@fortawesome/free-brands-svg-icons';

const HomeNavBar = () => {
    const history = useHistory();
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [isAdmin, setIsAdmin] = useState(false);

    useEffect(() => {
        fetch('http://localhost:5000/isAdmin', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ email: sessionStorage.getItem('email') })
        })
            .then(response => response.json())
            .then(data => setIsAdmin(data))
    }, [])

    const handleSignOut = () => {
        sessionStorage.removeItem('token');
        sessionStorage.removeItem('email');
        sessionStorage.removeItem('name');
        window.location.reload(false);
    }
    return (
        <nav className="navbar navbar-expand-lg shadow-sm container">
            <Link className="navbar-brand " to="/home">
                <img className="img-fluid" src={logo} alt=""/>
            </Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav m-auto">
                    <li className="nav-item px-2">
                        <Link className="nav-link Design" to="/home">Home</Link>
                    </li>
                    {isAdmin && <li class="nav-item px-2">
                        <Link className="nav-link Design " to="/dashboard">Dashboard</Link>
                    </li>}
                    {!isAdmin && <li class="nav-item px-2">
                        <Link className="nav-link Design " to="/orders">Order List</Link>
                    </li>}
                    <li className="nav-item px-2">
                        <Link className="nav-link Design " to="#a">About</Link>
                    </li>
                    <li className="nav-item px-2">
                        <Link className="nav-link Design" to="#service">Service</Link>
                    </li>
                    <li className="nav-item px-2">
                        <Link className="nav-link Design" to="#a">Contact</Link>
                    </li>

                    <li className="nav-item pr-2">
                        <button className=" font-weight-bold BtnStyle"><CallOutlinedIcon /> 123-456-7890</button>
                    </li>
                    <li className="nav-item">
                        {!sessionStorage.getItem('email') && <Link to="/login"><button className=" font-weight-bold navBtnStyle">LOGIN<ArrowRightAltOutlinedIcon/></button></Link>
                            
                        }
                        {sessionStorage.getItem('email') && <Link><button onClick={handleSignOut} className=" font-weight-bold navBtnStyle"><FontAwesomeIcon icon={faSignOutAlt}/>LOGOUT</button></Link>
                            
                        }
                    </li>

                </ul>

            </div>
        </nav>
    );
};

export default HomeNavBar;