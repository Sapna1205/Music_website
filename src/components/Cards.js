import React from 'react'
import CardItem from './CardItem';
import "./Cards.css";

function Cards() {
    return (
        <div className="cards">
            <h1>All about Music</h1>
           <div className="card__container">
               <div className="card__wrapper">
                   
                        <ul className='cards__items'>
                      
                            <CardItem
                            src='https://images.pexels.com/photos/1876279/pexels-photo-1876279.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                            text=' Where words fail, music speaks.'
                            //label=''
                            path='/services'
                            />
                            <CardItem
                            src='https://images.pexels.com/photos/1864653/pexels-photo-1864653.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                            text='Music is the language of the spirit. It opens the secret of life bringing peace, abolishing strife.'
                           // label=''
                            path='/services'
                            />
                            </ul>
                        <ul className='cards__items'>
                            <CardItem
                            src='https://images.pexels.com/photos/7586689/pexels-photo-7586689.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
                            text='If music be the food of love, play on.'
                            //label=''
                            path='/services'
                            />
                            <CardItem
                            src='https://images.pexels.com/photos/2272854/pexels-photo-2272854.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                            text='Music can name the unnameable and communicate the unknowable.'
                            //label=''
                            path='/products'
                            />
                            <CardItem
                            src='https://images.pexels.com/photos/1717079/pexels-photo-1717079.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                            text='Music is powerful. As people listen to it, they can be affected. They respond.'
                           // label=''
                            path='/sign-up'
                            />
                   </ul>
               </div>

           </div>


        </div>
    )
}

export default Cards;
