import React from 'react';
import NavBar from '../NavBar/NavBar';
import SideBar from '../SideBar/SideBar';
import { useForm } from "react-hook-form";
import sideImage from "../../../Images/reviews.png";
import './Review.css';
import ArrowRightAltOutlinedIcon from '@material-ui/icons/ArrowRightAltOutlined';
import { useHistory } from 'react-router';

const Review = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const history = useHistory();
    const onSubmit = data => {
        const reviewData = {
            name: data.name,
            email: data.email,
            serviceName: data.service,
            review: data.details
        }
        fetch('https://morning-sands-88518.herokuapp.com/addReview', {
            method:'POST',
            headers: {
                'content-type': "application/json"
            },
            body: JSON.stringify(reviewData)
        })
        .then(response => response.json())
        .then(data =>{
            if(data){
                alert('Review submitted successful')
                history.push('/home')
            }
        })
    };
    return (
        <>
            <NavBar></NavBar>
            <SideBar></SideBar>
            <div className="container mt-5 p-4 shadow" style={{ borderRadius: '10px' }}>
                <h3 className="ml-5" style={{ color: '#922c88' }}>Write A Review</h3>
                <div className="row" >
                <div className="col-md-7" >
                <form className="border-0 w-75 ml-5" onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-group">
                        <input type="text" className="form-control"   {...register("name")} placeholder="Your Name" required />
                    </div>
                    <div className="form-group">
                        <input type="email" className="form-control"   {...register("email")} placeholder="Your Email Address" required />
                    </div>
                    <div className="form-group">
                        <input type="text" className="form-control"   {...register("service")} placeholder="Service Name" required />
                    </div>
                    <div className="form-group">
                        <textarea rows="4" className="form-control" {...register("details")} placeholder="Details.." required cols="50" ></textarea>
                    </div>
                    <div className="form-group">
                        <button className='btn btn-info ml-1 '>Submit Review <ArrowRightAltOutlinedIcon/></button>
                    </div>

                </form>
                </div>
               <div className="col-md-5">
                   <img className="img-fluid" src={sideImage} alt=""/>
               </div>
                </div>

            </div>

        </>
    );
};

export default Review;