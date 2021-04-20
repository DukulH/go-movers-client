import React, { useContext, useEffect, useState } from 'react';
import './SideBar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTasks, faCogs } from '@fortawesome/free-solid-svg-icons';
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';
import StoreMallDirectoryOutlinedIcon from '@material-ui/icons/StoreMallDirectoryOutlined';
import LocalMallOutlinedIcon from '@material-ui/icons/LocalMallOutlined';
import RateReviewOutlinedIcon from '@material-ui/icons/RateReviewOutlined';
import { UserContext } from '../../../App';
import { Link } from 'react-router-dom';


const Sidebar = () => {
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

    return (
        <div className="sidebar shadow text-center">
            {isAdmin && <Link className="border" to="/dashboard"> <StoreMallDirectoryOutlinedIcon className="mb-2 materialStyle" /> <br />Dashboard</Link>}
            <Link className="border" to="/orders"><LocalMallOutlinedIcon className="mb-2 materialStyle" /><br />Orders List</Link>
            <Link className="border" to="/review"><RateReviewOutlinedIcon className="mb-2 materialStyle" /><br />Review</Link>
            {isAdmin && <Link className="border" to="/addService"><FontAwesomeIcon className="mb-2 iconStyle" icon={faCogs} /><br />Add Service</Link>}
            {isAdmin && <Link className="border" to="/adminAdd"><AccountCircleOutlinedIcon className="mb-2 materialStyle" /><br />Make Admin</Link>}
            {isAdmin && <Link className="border" to="/manage"><FontAwesomeIcon className="mb-2 iconStyle" icon={faTasks} /><br />Manage Services</Link>}
        </div>

    );
};

export default Sidebar;