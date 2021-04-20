import React, { useMemo, useState } from "react";
import './SplitForm.css';
import {
  useStripe,
  useElements,
  CardNumberElement,
  CardCvcElement,
  CardExpiryElement
} from "@stripe/react-stripe-js";



const useOptions = () => {

  const options = useMemo(
    () => ({
      style: {
        base: {
          fontSize: '16px',
          color: "#122333",
          letterSpacing: "0.025em",
          fontFamily: "Source Code Pro, monospace",
          "::placeholder": {
            color: "#aab7c4"
          }
        },
        invalid: {
          color: "#9e2146"
        }
      }
    }),
    []
  );

  return options;
};

const SplitForm = ({handleOrderInfo}) => {
 
  const [error, setError]= useState(null);
  const stripe = useStripe();
  const elements = useElements();
  const options = useOptions();

  const handleSubmit = async event => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const payload = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardNumberElement)
    });
    console.log(payload);
    handleOrderInfo(payload.id)
  };

  return (
    <div className="p-3 m-auto">
      <form onSubmit={handleSubmit}>
      <label>
        Card number
        <CardNumberElement
          options={options}
        />
      </label>
      <label className="ml-5">
        Expiration date
        <CardExpiryElement
          options={options}
        />
      </label>
      <label>
        CVC
        <CardCvcElement
          options={options}
        />
      </label>
      <br/>
      <button className="orderBtn" style={{padding:'5px 15px'}} type="submit" disabled={!stripe}>
        PAY
      </button>
    </form>
    </div>
    
  );
};

export default SplitForm;