import React from 'react';
import NavBar from '../NavBar/NavBar';
import SideBar from '../SideBar/SideBar';
import { useForm } from "react-hook-form";
import { useHistory } from 'react-router';

const AdminAdd = () => {
    let history = useHistory();
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        const adminData = {
            email: data.email
        }

        fetch('https://morning-sands-88518.herokuapp.com/addAdmin', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(adminData)
        })
            .then(response => response.json())
            .then(data => {
                if (data) {
                    alert('Admin added successfully');
                    document.getElementById("resetInput").reset();
                }
                else {
                    alert('Admin added failed!!');
                    history.push('/adminAdd')
                }
            })
    };
    return (
        <>
            <NavBar></NavBar>
            <SideBar></SideBar>
            <div className="container mt-5 p-4 shadow" style={{borderRadius:'10px'}}>
                <h3 className="" style={{ color: '#922c88' }}>Make New Admin</h3>
                <form className="border-0 w-50" id="resetInput" onSubmit={handleSubmit(onSubmit)}> 
                    <div className="form-group d-flex">
                        <input type="email" className="form-control"    {...register("email")}  placeholder="admin@example.com" required />
                        <button className='btn btn-info ml-1'>Submit</button>
                    </div>
                </form>

            </div>

        </>
    );
};

export default AdminAdd;