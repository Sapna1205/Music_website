import React from 'react';
import './Home.css';
import Navbar from '../Navbar';
import SlideShow from '../components/SlideShow';
import CardItem from '../components/CardItem';
import Cards from '../components/Cards';
import Footer from '../components/footer';
const Home = () => {
    return (
        <>
        <div>
            <div className="home-container">

                <Navbar/>
                <div className='home'> 
                    <h1>Musician</h1>
                    <p>Make your own compositions</p>
                    <div className="btn">
                        <button className='button'>Get app</button>
                        <button  className='button'>Compose</button>
                    </div>
                </div>
        
            </div>
  
                <SlideShow/>
                <Cards/>
                <div className='about'>
                    <h2>About us</h2>
                    <p>
                    Music is the best way to be happy and busy in life. In this busy, crowded and corrupt world, where everyone wants to harm each other at all times, music keeps us happy during these difficult times and helps to provide relief to our brain. I have realized in my own real life that music is, in fact, a tool to help keep everyone happy.
                    </p>

                </div>
               <Footer/>
                
     

        </div>
       
        </>
     
    )
}

export default Home;
