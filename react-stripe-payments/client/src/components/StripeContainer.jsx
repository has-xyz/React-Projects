import React from 'react'
import PaymentForm from './PaymentForm'
import { Elements } from '@stripe/react-stripe-js'
import {loadStripe} from '@stripe/stripe-js'

const PUBLIC_KEY = 'pk_test_51HrJ3PL7lAE2sv3rUJBryUHd8oY42zIHvqNHJpK77X0FUbFTAe6wGjIHT2Op1hqS35uZfndGscikpW1OUTMRiWav00iIqdZ3gx'

const stripeTestPromise = loadStripe(PUBLIC_KEY)


export default function StripeContainer() {
    return (
        <Elements stripe={stripeTestPromise}>
            <PaymentForm />
        </Elements>
    )
}
