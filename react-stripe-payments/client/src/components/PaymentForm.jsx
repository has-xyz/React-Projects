import React, { useState } from 'react'
import axios from 'axios'
import { useElements,  CardElement, useStripe} from '@stripe/react-stripe-js'

const CARD_OPTIONS = {
    iconStyle: 'solid',
    style: {
        base: {
            iconColor: '#c4f0ff',
            color: '#fff',
            fontWeight: 'bold',
            fontFamily: 'Roboto, Open Sans, Segoe UI, sans-serif',
            fotnSize: '16px',
            fontSmoothing: 'antialiased',
            ":-webkit-autofill": { color: '#fce883' },
            "::placeholder": { color: '#87bbfd'}
        }, 
        invalid: {
            iconColor: '#ffc7ee',
            color: '#ffc7ee'
        }
    }
}


export default function PaymentForm() {

    const [success, setSuccess] = useState(false);
    const stripe = useStripe();
    const elements = useElements();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const {error, paymentMethod} = await stripe.createPaymentMethod({
            type: 'card',
            card: elements.getElement(CardElement)
        })

        if (!error) {
            try {
                const {id} = paymentMethod
                const response = await axios.post("http://localhost:4000/payment", {
                    amount: 2000,
                    id
                });

                if (response.data.success) {
                    console.log('Successfully payment');
                    setSuccess(true);
                }
            } catch (err) {
                console.log(err)
            }
        } else {
            console.log(error.message)
        }
    }

    return (
        <>
            {!success ? 
            <form onSubmit={handleSubmit}>
                <fieldset className="FormGroup">
                    <div className="FormRow">
                        <CardElement options={CARD_OPTIONS} />
                    </div>
                </fieldset>
                <button type="submit">Pay</button>
            </form> : 
            <div>
                <h2>You have successfully made a payment</h2>.
            </div>}
        </>
    )
}
