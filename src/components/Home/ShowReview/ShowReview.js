import React, { useEffect, useState } from 'react';
import './ShowReview.css';
import reviewSideImg from '../../../Images/dariusz-sankowski-3OiYMgDKJ6k-unsplash.jpg';
import Carousel from 'react-bootstrap/Carousel';
import bg from '../../../Images/bg.jpg'


const ShowReview = () => {
    const [reviewData, setReviewData] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/getReview')
            .then(response => response.json())
            .then(data => setReviewData(data))
    }, [reviewData])


    return (
        <div className="container">
            <h2 className="text-center mt-5 pt-5" style={{ color: '#ED4C20' }}>REVIEWS</h2>
            <div className="carouselStyle">
                <div className="">
                <Carousel fade>
                    {
                        reviewData.map(review =>
                            
                                <Carousel.Item key={review._id}>
                                    <img className="img-fluid" src={bg} alt="" />
                                    <Carousel.Caption>
                                        <h3 className="pb-5">{review.serviceName}</h3>
                                        <p className="">"{review.review}"</p>
                                        <p className="pb-5 mb-5">-{review.name}</p>
                                    </Carousel.Caption>
                                </Carousel.Item>

                            )
                    }
                    </Carousel>
                </div>
                <div>
                    <img className="img-fluid" src={reviewSideImg} alt="" />
                </div>
            </div>
        </div>
    );
};

export default ShowReview;