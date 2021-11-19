import express from 'express'
import dotenv from 'dotenv'
import Stripe from 'stripe'
import bodyParser from 'body-parser'
import cors from 'cors'

dotenv.config();

const app = express();
const stripe = Stripe(process.env.STRIPE_SECRET_TEST)


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json())
app.use(cors());


app.post('/payment', cors(), async (req, res) => {
    let {amount, id} = req.body;

    try {
        const payment = await stripe.paymentIntents.create({
            amount,
            currency: 'GBP',
            description: 'Clipmill AI, Video Testimonial',
            payment_method: id,
            confirm: true
        });

        console.log("Payment: ", payment)
        res.json({
            message: 'Payment successful',
            success: true
        })
    } catch (err) {
        console.log("Error: ", error);
        res.json({
            message: 'Payment failed',
            success: false
        })
    }
})



app.listen(process.env.PORT || 4000, () => {
    console.log('Listening on port 4000' )
})