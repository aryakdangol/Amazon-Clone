/* eslint-disable quotes */
const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")('sk_test_51JFCx4LyeqvsFykMfHVHykOI6R7jAXI24B1uavRe0lcb6ZaAwh1IGwva9V9XOOlVoZ5bzxd4IHmfTQRdilgZEr8t001W7OxHzC');


//  API

//  App config
const app = express();

//  MIDDLEWARES
app.use(cors({origin: true}));
app.use(express.json());


//  API ROUTES
app.get('/', (req, res) => res.status(200).send("HELLO WORLD"));

app.post("/payments/create", async (req, res) => {
    const total = req.query.total;

    console.log('Payment Request Recieved', total);

    const paymentIntent = await stripe.paymentIntents.create({
        amount: total,
        currency: "usd",
    });
    console.log(paymentIntent.client_secret);
    res.status(201).send({
        clientSecret : paymentIntent.client_secret,
    });
});

//  LISTEN
exports.api = functions.https.onRequest(app);

//  http://localhost:5001/clone-ecca6/us-central1/api
