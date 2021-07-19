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
                    <Product title = "The Lean Startup" 
                    image = "https://images-na.ssl-images-amazon.com/images/I/51T-sMqSMiL._SX329_BO1,204,203,200_.jpg"
                    price = {19.99}
                    rating = {3} />
                </div>
                <div className="home-row">
                    <Product 
                    id = {2}
                    title = "The Lean Startup" 
                    image = "https://images-na.ssl-images-amazon.com/images/I/51T-sMqSMiL._SX329_BO1,204,203,200_.jpg"
                    price = {19.99}
                    rating = {2} />
                    <Product 
                    id = {3}
                    title = "The Lean Startup" 
                    image = "https://images-na.ssl-images-amazon.com/images/I/51T-sMqSMiL._SX329_BO1,204,203,200_.jpg"
                    price = {19.99}
                    rating = {2} />
                    <Product 
                    title = "The Lean Startup" 
                    image = "https://images-na.ssl-images-amazon.com/images/I/51T-sMqSMiL._SX329_BO1,204,203,200_.jpg"
                    price = {19.99}
                    rating = {1} />
                </div>
                <div className="home-row">
                <Product 
                    id = {4}
                    title = "The Lean Startup" 
                    image = "https://images-na.ssl-images-amazon.com/images/I/51T-sMqSMiL._SX329_BO1,204,203,200_.jpg"
                    price = {19.99}
                    rating = {5} />
                </div>
            </div>
        </div>
    )
}

export default Home
