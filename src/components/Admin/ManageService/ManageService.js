import { Button } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import NavBar from '../NavBar/NavBar';
import SideBar from '../SideBar/SideBar';
import DeleteOutlineOutlinedIcon from '@material-ui/icons/DeleteOutlineOutlined';
import UpdateOutlinedIcon from '@material-ui/icons/UpdateOutlined';
import './ManageService.css'

const ManageService = () => {
    const [serviceDetails, setServiceDetails] = useState([]);

    useEffect(() => {
        fetch('https://morning-sands-88518.herokuapp.com/services')
            .then(response => response.json())
            .then(data => setServiceDetails(data))
    }, [serviceDetails])

    const handleDeleteProduct = (key) => {
        fetch(`https://morning-sands-88518.herokuapp.com/deleteService/${key}`, {
            method: 'DELETE',
        })
            .then(response => response.json())
            .then(result => {
                if (result) {
                    alert('Service deleted successfully');
                }

            })
    }

    return (
        <>
            <NavBar></NavBar>
            <SideBar></SideBar>
            <div className="container">
                <h3 className="mt-5 mb-5" style={{ color: '#922c88' }}>Manage Service</h3>
                <div className="cardStyle">

                    {
                        serviceDetails.map(service =>
                            <div key={service._id} className="card rounded shadow border-0 mb-5">
                                <div className="card-body">
                                    <h3 className="card-subtitle mb-5 text-muted">{service.serviceName}</h3>
                                    <div className="row align-items-center">
                                        <div className="col-md-4">
                                            <img className="img-fluid w-75 rounded" src={service.serviceImage} alt="" />
                                        </div>
                                        <div className="col-md-8">
                                            <h4 className="card-text">Details:</h4>
                                            <p>{service.serviceDetails}</p>

                                            <Button variant="contained" className="mr-3" style={{ backgroundColor: '#32AA05', color: 'white' }}>
                                                <UpdateOutlinedIcon /> Update
                                    </Button>
                                            <Button variant="contained" color="secondary" onClick={() => handleDeleteProduct(service._id)}>
                                                <DeleteOutlineOutlinedIcon /> Delete
                                    </Button>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        )
                    }

                </div>

            </div>
        </>
    );
};

export default ManageService;