import React from 'react';
import './WorkFlowDetails.css';

const WorkFlowDetails = ({ workDetail }) => {
    return (
        <div className="mt-5">
            <div className='border m-auto imgStyle shadow-sm'>
                <img src={workDetail.img} className='' alt="" />
            </div>
            <h3 className="mt-4">{workDetail.name}</h3>
            <h6 className="mt-3">{workDetail.details}</h6>
        </div>
    );
};

export default WorkFlowDetails;