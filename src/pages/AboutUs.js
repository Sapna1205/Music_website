import React from 'react'
import Navbar from '../Navbar';
import './AboutUs.css';
import Footer from '../components/footer';

const AboutUs = () => {
    return (
        <div>
            <Navbar/>
            <div className='about_us'>
                <h1>About Us</h1>
                <img className='about_img' src="https://images.pexels.com/photos/1864637/pexels-photo-1864637.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"/>
                <p >
                I love listening to music since my childhood. I still remember that, for me, the meaning of a Sunday holiday was to listen to music with all family members. Throughout the day, in the middle of the house, music used to be played in a slow voice and every member of the house used to do their work.

My father used to inspire all the members of the house to listen to music. It helps to keep our brain strong and busy. Music is like meditation and it benefits us a lot if we listen to music every day. Some students have a habit of listening to music during their studies. They cannot study without music.

Music is like yoga. It keeps us happy and helps to balance hormones in our body, relieve body and brain, and thus keep us physically and mentally healthy. It not only protects us from being fat and clumsy but also keeps us away from mental problems. I love music very much and listen to music every morning.
                </p>
                <p>
                Music has a very important role in human life because everyone likes to listen to music. A person who listens to music with joy in his life knows the importance of music in the real world, if a person is interested in music, that person is always happy in his life, and is stress-free in every problem. , Listening to music brings peace and joy to the brain, listening to music inspires a person to do something better in life.

Music is also heard on many festivals, programs because it increases the excitement of the events, everyone likes to listen to their favourite music because music cannot be on just one subject, you can listen to music for any reason, if If your mind is very happy then you can listen to the music of happiness, if you are angry then the music of resentment, if someone is in love then love music, wedding, DJ’s music is also liked by people in parties. Many problems of a person’s life are pacified by music because listening to music keeps the mind and soul alive.
                </p>
            </div>
            <Footer/>
        </div>
    )
}

export default AboutUs;
