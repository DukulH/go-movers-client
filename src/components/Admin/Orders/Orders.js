import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../App';
import NavBar from "../NavBar/NavBar";
import SideBar from "../SideBar/SideBar";
import "./Orders.css";

const Orders = () => {
    const [loggedInUser] = useContext(UserContext);
    const [isAdmin, setIsAdmin] = useState(false);
    const [orders, setOrders] = useState([]);
    let i = 1;

    const [textColor, setTextColor] = useState(null)

    const handleChange = event => {

        if (event.target.value === 'Pending') {
            setTextColor('#F14A5E')
        }
        if (event.target.value === 'Done') {
            setTextColor('#3F900A')
        }
        if (event.target.value === 'Ongoing') {
            setTextColor('#2AC8F2')
        }

    }
    useEffect(() => {
        fetch('https://morning-sands-88518.herokuapp.com/isAdmin', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ email: sessionStorage.getItem('email') })
        })
            .then(response => response.json())
            .then(data => setIsAdmin(data))
    }, [])

    useEffect(() => {
        fetch('https://morning-sands-88518.herokuapp.com/orders', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ email: sessionStorage.getItem('email') })
        })
            .then(response => response.json())
            .then(data => setOrders(data))
    }, [])

    return (
        <>
            <NavBar></NavBar>
            <SideBar></SideBar>
            <div className="container mt-5">
                <h3 className="mb-3" style={{ color: '#922c88' }}>Orders List</h3>
                {isAdmin && <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Client Name</th>
                            <th scope="col">Ordered Service</th>
                            <th scope="col">Service Cost</th>
                            <th scope="col">Status</th>

                        </tr>
                    </thead>
                    {orders.map(order =>
                        <tbody>
                            <tr>
                                <th scope="row">{i++}</th>
                                <td>{order.name}</td>
                                <td>{order.serviceName}</td>
                                <td>${order.servicePrice}</td>
                                <td>
                                    <select className="selectOptionStyle" onChange={handleChange} style={{ color: `${textColor}`, fontWeight: 700 }} name="" id="">
                                        <option value="Pending">Pending</option>
                                        <option value="Done">Done</option>
                                        <option value="Ongoing">Ongoing</option>
                                    </select>

                                </td>
                            </tr>
                        </tbody>
                    )}
                </table>}
                {!isAdmin && <div>
                    <h3 className="text-center">{orders.length>0 ? '' :'No order placed yet!!'}</h3>
                    {orders.map(order =>
                    <div class="card mb-5">
                        <div class="card-header text-right bg-info text-light font-weight-bold">
                            {order.status}
                    </div>
                        <div class="card-body">
                            <h5 class="card-title">{order.serviceName}</h5>
                            <p class="card-text">{order.serviceDetails}</p>
                            <p class="card-text">Order date: {(new Date(order.date).toString ('dd/MM/yyyy'))}</p>
                            <p class="card-text"><strong>${order.servicePrice}</strong></p>
                        </div>
                    </div>
                )}
                </div>
                }


            </div>

        </>

    );
};

export default Orders;