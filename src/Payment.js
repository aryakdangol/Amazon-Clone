import { Card } from '@material-ui/core';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import axios from './axios';
import React, { useEffect, useState } from 'react'
import CurrencyFormat from 'react-currency-format';
import { Link, useHistory } from 'react-router-dom';
import CheckoutProduct from './CheckoutProduct';
import "./Payment.css"
import { getBasketTotal } from './reducer';
import { useStateValue } from './StateProvider'
import { db } from './firebase';


function Payment() {
    const[{basket, user}, dispatch] = useStateValue();
    const[error, setError] = useState(null);
    const [disabled, setDisabled] = useState(true)
    const[succeeded, setSucceeded] = useState(false)
    const[processing, setProcessing] = useState("");
    const[clientSecret, setClientSecret] = useState(true);
    const history = useHistory();

    const stripe = useStripe();
    const elements = useElements();

    useEffect(()=> {
        const getClientSecret = async () =>{
            const response = await axios({
                method: 'post',
                url : `/payments/create?total=${Number((getBasketTotal(basket) * 100).toPrecision(3))}`,
            })
            console.log(response);
            setClientSecret(response.data.clientSecret)
        }

        getClientSecret();
    },[basket])

    console.log('THE SECRET IS >>>>', clientSecret)

    const handleSubmit = async (e) => {
        e.preventDefault();
        setProcessing(true);

        const payload = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: elements.getElement(CardElement)
            }
        }).then(({paymentIntent})=>{

            db.collection('users')
            .doc(user?.uid)
            .collection('orders')
            .doc(paymentIntent.id)
            .set({
                basket: basket,
                amount: paymentIntent.amount,
                created: paymentIntent.created,
            })

            setSucceeded(true)
            setError(null)
            setProcessing(false)

            dispatch({
                type: "EMPTY_BASKET",
            })
            history.replace('/orders')
        })
    }

    const handleChange = e => {
        setDisabled(e.empty)
        setError(e.error ? e.error.message: "")
    }

    return (
        <div className = "payment">

            <div className="payment-container">
                <h1>Checkout (
                    <Link to = '/checkout'>{basket?.length} items</Link>
                </h1>
                <div className="payment-section">
                    <div className="payment-title">
                        <h3>Delivery Address</h3>
                    </div>
                        <div className="payment-address">
                            <p>{user?.email}</p>
                            <p>123 Street</p>
                            <p>Los Angeles, CA</p>
                        </div>
                </div>

                <div className="payment-section">
                    <div className="payment-title">
                        <h3>Review items and delivery</h3>
                    </div>

                    <div className="payment-items">
                        {basket.map(item => (
                            <CheckoutProduct
                                id = {item.id}
                                title = {item.title}
                                image = {item.image}
                                price = {item.price}
                                rating = {item.rating}
                                />
                        ))}
                    </div>

                </div>

                <div className="payment-section">

                    <div className="payment-title">
                        <h3>Payment Method</h3>
                    </div>

                    <div className="payment-details">
                        <form onSubmit = {handleSubmit}>
                            <CardElement onChange = {handleChange} />
                            <div className="payment-priceContainer">
                                <CurrencyFormat
                                    renderText = {(value) => (
                                        <>
                                        <h3>Order Total: {value}</h3>
                                        </>
                                    )}
                                    decimalScale = {2}
                                    value = {getBasketTotal(basket)}
                                    displayType = {"text"}
                                    thousandSeparator = {true}
                                    prefix = {"$"}
                                />
                                <button disabled = {processing || disabled|| succeeded}>
                                    <span>{processing ? <p>Processing</p> : "Buy now" }</span>
                                </button>
                            </div>
                            {error && <div>{error}</div>}
                        </form>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default Payment
