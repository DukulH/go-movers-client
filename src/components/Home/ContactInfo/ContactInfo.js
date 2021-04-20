import React from 'react';
import './ContactInfo.css';
import maps from '../../../Images/maps.jpg';
import AccessTimeOutlinedIcon from '@material-ui/icons/AccessTimeOutlined';
import RoomOutlinedIcon from '@material-ui/icons/RoomOutlined';
import MailOutlineOutlinedIcon from '@material-ui/icons/MailOutlineOutlined';

const ContactInfo = () => {
    return (
        <div className='container contactDiv'>
            
            <div className="">
                <img className="img-fluid" src={maps} alt=""/>
            </div>
            <div className="ContactStyle">
                <h6 style={{color: '#ED4C20'}} className="mb-5 mt-4">FIND US</h6>
                <h6 className="mb-5">Your success is our success and there’s more to good service than just being fast.</h6>
                <h6><RoomOutlinedIcon style={{color: '#ED4C20'}}/> 120 west, kafrul, Agargaon, Taltola, Dhaka-1207</h6>
                <h6><AccessTimeOutlinedIcon style={{color: '#ED4C20'}}/> Monday - Friday: 10 am - 10pm <br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Sunday: 11 am - 9pm
                </h6>
                <h6><MailOutlineOutlinedIcon style={{color: '#ED4C20'}}/> info@gomovers.com</h6>
            </div>
        </div>
    );
};

export default ContactInfo;