import React, { useEffect, useState } from 'react';
import CallOutlinedIcon from '@material-ui/icons/CallOutlined';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faTwitter, faGoogle} from '@fortawesome/free-brands-svg-icons'
const Footer = () => {
    const [serviceDetails, setServiceDetails] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(response => response.json())
            .then(data => setServiceDetails(data))
    }, [serviceDetails])
    return (
        <div className='mt-5 container'>
            <div className="footerHead">
                <div className='mt-5 footerIcon' style={{ backgroundColor: '#E3EEF2' }}>
                    <div className=" ml-2"><FontAwesomeIcon icon={faTwitter} /></div>
                    <div className=" ml-2" ><FontAwesomeIcon icon={faFacebookF} /></div>
                    <div className=" ml-2"><FontAwesomeIcon icon={faGoogle} /></div>
                </div>
                <div className='text-center mt-5 p-4' style={{ backgroundColor: '#ED4C20', color: 'white' }}>
                    <h5>CALL US TO ORDER SERVICE&nbsp;&nbsp;&nbsp;<strong><CallOutlinedIcon />123-456-7890</strong></h5>
                </div>
            </div>
            <div className="pb-3" style={{ backgroundColor: '#122333', color: 'white' }}>
                <div className="footerBody p-5">

                    <div className=" pt-5 pl-5">
                        <h1>GO <span style={{ color: '#ED4C20' }}>MOVERS</span></h1>
                        <p className='text-muted'>We are transport company that provides
                        fast and reliable transportation service.</p>
                    </div>
                    <div className="pt-5 pl-5">
                        <h5 className="mb-4">SERVICE</h5>
                        <ul className="text-muted">
                            {serviceDetails.map(service => 
                                <li>{service.serviceName}</li>
                                )}
                        </ul>
                    </div>
                    <div className="pt-5 pl-5">
                        <h5 className="mb-4">CUSTOMER CARE</h5>
                        <ul className="text-muted">
                            <li>About Us</li>
                            <li>Contact Us</li>
                        </ul>
                    </div>

                </div>
                <div className="footerEndTextDisplay">
                    <small className="pl-5 text-muted"><span className="ml-5 footerEndText">ProgrammingHero</span>© 2021. All Rights Reserved</small>
                    <small className="pl-5 text-muted"><span className="ml-5 footerEndText">Terms of use</span> and <span className="footerEndText">Privacy Policy</span></small>
                </div>
            </div>

        </div>
    );
};

export default Footer;