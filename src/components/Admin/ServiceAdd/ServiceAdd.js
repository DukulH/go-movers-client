import React, { useState } from 'react';
import NavBar from '../NavBar/NavBar';
import SideBar from '../SideBar/SideBar';
import { useForm } from "react-hook-form";
import './ServiceAdd.css'
import ArrowRightAltOutlinedIcon from '@material-ui/icons/ArrowRightAltOutlined';
import axios from 'axios';
import { useHistory } from 'react-router';

const ServiceAdd = () => {
    let history = useHistory();
    const { register, handleSubmit, } = useForm();
    const onSubmit = data => {
        const serviceData = {
            serviceName: data.serviceName,
            servicePrice: data.servicePrice,
            serviceDetails: data.serviceDetails,
            serviceImage: imageURL,
        }
        fetch('http://localhost:5000/addService', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(serviceData)
        })
            .then(response => response.json())
            .then(data => {
                if (data) {
                    alert('Service added successfully');
                    document.getElementById("resetForm").reset();
                }
                else {
                    alert('Service added failed!! \r\nCheck Service Name, imageFile properly');
                    history.push('/addService')
                }
            })
    }

    const [imageURL, setImageURL] = useState(null);

    const loader = event =>{
        let file = event.target.files;
        let show = "<span>Selected file : </span>" + file[0].name;
        let output = document.getElementById('selector');
        output.innerHTML = show;
        output.classList.add('active')

        const imageData = new FormData();
        imageData.set('key', '060a4f9b8feceeac3a5a19c5910df147');
        imageData.append('image', event.target.files[0]);

        axios.post('https://api.imgbb.com/1/upload', imageData)
            .then(function (response) {
                setImageURL(response.data.data.display_url);
            })
            .catch(function (error) {
                console.log(error);
            });

    }
    return (
        <>
            <NavBar></NavBar>
            <SideBar></SideBar>
            <div className="container mt-5 p-4 shadow" style={{ borderRadius: '10px' }}>
                <h3 className="ml-5" style={{ color: '#922c88' }}>New Service</h3>
                <div className="row" >
                <div className="col-md-7" >
                <form className="border-0 ml-5 " id='resetForm' onSubmit={handleSubmit(onSubmit)}>

                    <div className="row">
                    <div className="col-md-6 form-group">
                        <input type="text" className="form-control"   {...register("serviceName")} placeholder="Service Name" required />
                    </div>
                    <div className="col-md-6 form-group">
                        <input type="number" className="form-control"   {...register("servicePrice")} placeholder="Service Price" required />
                    </div>

                    </div>
                    <div className="form-group">
                        <textarea rows="4" className="form-control" {...register("serviceDetails")} placeholder="Service Details.." required cols="50" ></textarea>
                    </div>
                    <div className="form-group">
                        <input type="file" id="file" onChange={loader} hidden/>
                        <label className="uploadFileStyle" id="selector" htmlFor="file">Service Image</label>
                    </div>
                    
                    <div className="form-group">
                        <button className='btn btn-info ml-1 ' type="submit">Add Service <ArrowRightAltOutlinedIcon/></button>
                    </div>

                </form>
                </div>
               <div className="col-md-5">
                   <img className="img-fluid" src="" alt=""/>
               </div>
                </div>

            </div>
        </>
    );
};

export default ServiceAdd;