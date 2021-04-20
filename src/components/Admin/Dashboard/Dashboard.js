import React, { useContext, useEffect, useState } from 'react';
import NavBar from '../NavBar/NavBar';
import SideBar from '../SideBar/SideBar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import AlarmOnOutlinedIcon from '@material-ui/icons/AlarmOnOutlined';
import { faTruckLoading } from '@fortawesome/free-solid-svg-icons';
import SettingsApplicationsOutlinedIcon from '@material-ui/icons/SettingsApplicationsOutlined';
import AccessibleForwardOutlinedIcon from '@material-ui/icons/AccessibleForwardOutlined';
import "./Dashboard.css";
import BarChart from '../BarChart/BarChart';
import { UserContext } from '../../../App';
import Orders from '../Orders/Orders';

const Dashboard = () => {

    return (
        <div>
            <NavBar></NavBar>
            <SideBar></SideBar>
            <div className=" m-auto pt-5 container">
                <div className="text-center justify-content-center row">
                    <div className="col-md-2 m-4 shadow" style={{ borderRadius: '10px' }}>
                        <div className="card-body pt-5">
                            <h5 className="card-title"><AlarmOnOutlinedIcon className="materialStyle mb-2" /></h5>
                            <p className="card-text">Pending Orders</p>
                            <p className="materialStyle">15</p>
                        </div>
                    </div>
                    <div className="col-md-2 m-4 shadow" style={{ borderRadius: '10px' }}>
                        <div className="card-body pt-5">
                            <h5 className="card-title"> <AccessibleForwardOutlinedIcon className="materialStyle mb-2" /></h5>
                            <p className="card-text">Ongoing</p>
                            <p className="materialStyle">15</p>
                        </div>
                    </div>
                    <div className="col-md-2 m-4 shadow" style={{ borderRadius: '10px' }} >
                        <div className="card-body pt-5">
                            <p className="card-title"><FontAwesomeIcon className="iconStyle" icon={faTruckLoading} /></p>
                            <p className="card-text">Completed</p>
                            <p className="materialStyle">15</p>
                        </div>
                    </div>
                    <div className="col-md-2 m-4 shadow" style={{ borderRadius: '10px' }}>
                        <div className="card-body pt-5">
                            <h5 className="card-title"><SettingsApplicationsOutlinedIcon className="materialStyle mb-2"/></h5>
                            <p className="card-text">Services</p>
                            <p className="materialStyle">15</p>
                        </div>
                    </div>
                </div>
            </div>
            
            <br/>
            <br/>
           <div className="container w-50 d-flex justify-content-center shadow">
            <BarChart></BarChart>
            </div>

        </div>
    );
};

export default Dashboard;