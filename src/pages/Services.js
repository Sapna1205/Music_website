import React from 'react'
import Navbar from '../Navbar';
import "./Services.css";
import Card from "./Card";
import Footer from '../components/footer';

const Services = () => {
    return (
        <div>
            <Navbar/>
            <div className='serv'>
                <h1>Services</h1>
                <img className='serv_img' src="https://images.pexels.com/photos/2510575/pexels-photo-2510575.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"/>
                <p>
                Music is the best way to be happy and busy in life. In this busy, crowded and corrupt world, where everyone wants to harm each other at all times, music keeps us happy during these difficult times and helps to provide relief to our brain. I have realized in my own real life that music is, in fact, a tool to help keep everyone happy.
                </p>
            </div>
            <Card/>
            <Footer/>
        </div>
    )
};

export default Services;
