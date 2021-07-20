import React from 'react'
import "./Home.css"
import Product from './Product'

function Home() {
    return (
        <div className = "home">
            <div className="home-container">
                <img className="home-image" src="https://images-eu.ssl-images-amazon.com/images/G/31/img17/Pantry/MARCH_2020/SVD_Teaser/Desktop_Teaser_Header.jpg" alt="" />
                    
                <div className="home-row">
                    <Product
                    id = {1} 
                    title = "The Lean Startup" 
                    image = "https://images-na.ssl-images-amazon.com/images/I/51T-sMqSMiL._SX329_BO1,204,203,200_.jpg"
                    price = {19.99}
                    rating = {5} />
                    <Product 
                    id = {2}
                    title = "SAMSUNG Galaxy S21 Ultra 5G Factory Unlocked Android Cell Phone 128GB US Version Smartphone Pro-Grade Camera 8K Video 108MP High Res, Phantom Silver" 
                    image = "https://images-na.ssl-images-amazon.com/images/I/61bLefD79-L._AC_SL1020_.jpg"
                    price = {999.99}
                    rating = {4} />
                </div>
                <div className="home-row">
                    <Product 
                    id = {3}
                    title = "Apple Airpods Pro" 
                    image = "https://images-na.ssl-images-amazon.com/images/I/71zny7BTRlL._AC_SL1500_.jpg"
                    price = {250.0}
                    rating = {5} />
                    <Product 
                    id = {4}
                    title = "iPhone 12 Pro MAX Unlocked Smartphone, 6.26in HD Bang Screen Mobile Phone, 1+8G Dual Sim Cell Phone for Android 10.0 Gold(US)" 
                    image = "https://images-na.ssl-images-amazon.com/images/I/71g0anjkYKL._AC_SL1500_.jpg"
                    price = {999.99}
                    rating = {2} />
                    <Product 
                    id = {5}
                    title = "Ibanez GRG 6 String Solid-Body Electric Guitar, Right, Metallic Gray Sunburst, Full (GRG121DXMGS)" 
                    image = "https://images-na.ssl-images-amazon.com/images/I/71TzF3uRPHL._AC_SL1500_.jpg"
                    price = {249.99}
                    rating = {4} />
                </div>
                <div className="home-row">
                <Product 
                    id = {6}
                    title = "LG 34WN80C-B 34 inch 21:9 Curved UltraWide WQHD IPS Monitor with USB Type-C Connectivity sRGB 99 Percentage Color Gamut and HDR10 Compatibility, Black" 
                    image = "https://images-na.ssl-images-amazon.com/images/I/81WBbFOEHwL._AC_SL1500_.jpg"
                    price = {180.99}
                    rating = {5} />
                </div>
            </div>
        </div>
    )
}

export default Home
