import React from 'react';
import './WorkFlow.css';
import web from "../../../Images/icon-web.png";
import truck  from "../../../Images/icon-truck-2.png";
import notebook from "../../../Images/icon-note-book.png";
import WorkFlowDetails from '../WorkFlowDetails/WorkFlowDetails';

const workFlowDetails=[
    {
        name: 'ORDER A SERVICE',
        img:notebook,
        details:'Order service online from GO MOVERS.',
        id:1
    },
    {
        name: 'TRACK ORDER',
        img:truck,
        details:'Track you order online. Stay home stay safe',
        id:2
    },
    {
        name: 'DRIVE WITH US',
        img:web,
        details:'Enjoy your ride with us',
        id:3
    }
]

const WorkFlow = () => {
    return (
        <div className='container text-center'>
            <h5 className='inlineText' style={{color:"#ED4C20"}}> <span>OUR FLOW</span></h5>
            <h1 style={{color:"#122333"}} className="font-weight-bold mb-5 pt-4">HOW WE WORK</h1>
            <div className="card-display mb-5">
            {
                workFlowDetails.map(workDetail =>
                    <WorkFlowDetails key={workDetail.id} workDetail={workDetail}></WorkFlowDetails>
                    )
            }
            </div>
           
            
        </div>
    );
};

export default WorkFlow;