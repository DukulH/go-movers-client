import React from 'react';
import './ServiceDetails.css';
import ArrowRightAltOutlinedIcon from '@material-ui/icons/ArrowRightAltOutlined';
import { faDollarSign } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { Link } from 'react-router-dom';

const ServiceDetails = ({ service }) => {
    return (
        <div className="serviceStyle text-center rounded">            
                <img className="img-fluid" style={{overflow:'hidden', width: '250px', height:'250px'}} src={service.serviceImage} alt="" />
                <div className="card-body" style={{height:'200px'}}>
                    <h3 className="card-title" style={{color:'#ED4C20'}}>{service.serviceName}</h3>
                    <p className="card-text"><strong>{service.serviceDetails}</strong></p>
                    <br/>
                    <p className="card-text"><strong><FontAwesomeIcon icon={faDollarSign}/> {service.servicePrice}</strong></p>
                </div>
                <div className="mb-5">
                    <Link to={'/orderProcess/'+service._id}><button className="orderBtn rounded">ORDER NOW <ArrowRightAltOutlinedIcon style={{color:'#ED4C20'}}/></button></Link>
                </div>
          

        </div>
    );
};

export default ServiceDetails;