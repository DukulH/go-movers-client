import { faDollarSign } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useContext, useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../App';
import { loadStripe } from '@stripe/stripe-js';
import HomeNavBar from '../../Shared/HomeNavBar/HomeNavBar';
import SplitForm from '../PaymentProcess/SplitForm';
import { Elements } from '@stripe/react-stripe-js';

const stripePromise = loadStripe('pk_test_51If8fgDxpFcPjDCsLkYtKBgBcGjJfcSTdJCSdbCLh5wCr2dJkFOa4ITl1EruGFKVObigv7WRYEqmXtLEA2FTSS4m005SREMwJg');

const OrderProcess = () => {
    const { id } = useParams();
    const history = useHistory();
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [orderDetails, setOrderDetails] = useState({});
    const [paymentProcessClicked, setPaymentProcessClicked] = useState(false);
    useEffect(() => {
        fetch(`https://morning-sands-88518.herokuapp.com/orderDetails/${id}`)
            .then(response => response.json())
            .then(data => {
                setOrderDetails(data)
            })
    }, [id])
    const handleOrderInfo = (paymentId) => {
        orderDetails._id = null;
        const info = { ...loggedInUser, ...orderDetails, paymentID: paymentId, status: 'Pending', date: new Date()};
        fetch('https://morning-sands-88518.herokuapp.com/addOrder',{
            method:'POST',
            headers: {
                'content-type': 'application/json'
            },
            body:JSON.stringify(info)
        })
        .then(response => response.json())
        .then(data => {
            if(data){
                alert('Order Placed Successful');
                history.push('/orders');
            }
        })

        
        
    }
    console.log(orderDetails._id);
    return (
        <>
            <HomeNavBar></HomeNavBar>
            {!paymentProcessClicked && <div className="container mt-5">

                <div class="card w-75 border-0 shadow-sm m-auto p-5">
                    <h1> <span style={{ color: '#ED4C20' }}>Order</span> <span style={{ color: '#122333' }}>Confirmation</span></h1>
                    <div class="card-body">
                        <h5 class="card-title">Service Order:</h5>
                        <h6 class="card-subtitle mb-2 text-muted">{orderDetails.serviceName}</h6>
                        <p class="card-text">{orderDetails.serviceDetails}</p>
                        <p><strong>Service cost: ${orderDetails.servicePrice}</strong></p>
                        <button className='navBtnStyle rounded font-weight-bold' onClick={() => { setPaymentProcessClicked(true) }}><FontAwesomeIcon icon={faDollarSign} /> PROCEED PAYMENT</button>
                    </div>
                </div>
            </div>}
            {paymentProcessClicked && <div className="container mt-5">

                <div class="card w-75 border-0 shadow-sm m-auto p-5">
                    <h1> <span style={{ color: '#ED4C20' }}>Payment</span></h1>
                    <Elements stripe={stripePromise}>
                        <SplitForm handleOrderInfo={handleOrderInfo}/>
                    </Elements>
                </div>
            </div>
            }



        </>
    );
};

export default OrderProcess;