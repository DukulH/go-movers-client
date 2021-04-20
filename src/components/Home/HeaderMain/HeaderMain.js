import React from 'react';
import ArrowRightAltOutlinedIcon from '@material-ui/icons/ArrowRightAltOutlined';
import sideImg from '../../../Images/juan-encalada-6mcVaoGNz1w-unsplash.jpg';
import './HeaderMain.css';

const HeaderMain = () => {
    return (
        <section className="container mt-5 containerStyle">
            <div className="row align-items-center text-center">
            <div className="col-md-5 text-light">
                <h1>TRAVEL WITH <br/><span style={{color:'#ED4C20'}}>GO MOVERS </span></h1>
                <h5>Our main goal is to serve the best transport system in town</h5>
                <br/> <br/>
                 <a href="#service"><button className="orderBtnWhite">ORDER NOW <ArrowRightAltOutlinedIcon style={{color:'#122333'}}/></button> </a>
            </div>

            <div className="col-md-7 mt-3">
                <img src={sideImg} alt="" className="img-fluid headerImfStyle"/>
            </div>
        </div>
        </section>
    );
};

export default HeaderMain;