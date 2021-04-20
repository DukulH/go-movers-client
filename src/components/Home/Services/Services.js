import React, { useEffect, useState } from 'react';
import ServiceDetails from '../ServiceDetails/ServiceDetails';
import './Services.css';


const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('https://morning-sands-88518.herokuapp.com/services')
        .then(response => response.json())
        .then(data => setServices(data))
    },[services])
    return (
        <section className='container pt-5' id='service'>
        <h1 className='text-center pt-5 mb-5'> <span style={{color:'#ED4C20'}}>Our</span> Services</h1>
        <div className="card-display">
        {
                services.map(service => 
                    <ServiceDetails key={service._id} service={service}></ServiceDetails>
                    )
            }
        </div>
           
            
        </section>
        
    );
};

export default Services;