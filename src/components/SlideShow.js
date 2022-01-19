import React from 'react';
import 'react-slideshow-image/dist/styles.css'
import { Slide } from 'react-slideshow-image';
import './SlideShow.css';



const SlideShow = () => {
    return (
     
        <Slide easing="ease">
            
          
            <div className="imgs">
                <div>  
                <img className='image' src="https://variety.com/wp-content/uploads/2021/04/Music-Money.jpg" />
                <div class="bg-text">
                    <h2>Blurred Background</h2>
                    <h2>I am John Doe</h2>
                    <p>And I'm a Photographer</p>
            </div>
                </div>
            </div>
           
          
            <div className="imgs">
                <div>
                <img  className='image' src="https://media.graphcms.com/resize=fit:clip,height:600,/output=format:webp/6scyTBASnefFBsF3amd0" />
                <div class="bg-text">
                    <h2>Blurred Background</h2>
                    <h2>I am John Doe</h2>
                    <p>And I'm a Photographer</p>
                </div>
                </div>
            </div>
           

            <div className="imgs">
                <div>   
                <img  className='image' src="https://www.mi.edu/wp-content/uploads/2019/03/AdobeStock_102757974-1-1080x675.jpeg"/>
                <div class="bg-text">
                    <h2>Blurred Background</h2>
                    <h2>I am John Doe</h2>
                    <p>And I'm a Photographer</p>
                </div>
                </div> 
            </div>

            <div className="imgs">
                <div>   
                   
                 <img  className='image' src="https://mixedinkey.com/wp-content/uploads/2020/08/Studio-Room.png"/>
                 <div class="bg-text">
                    <h2>Blurred Background</h2>
                    <h2>I am John Doe</h2>
                    <p>And I'm a Photographer</p>
                </div>
                </div> 
            </div>
        </Slide>
    )
};

export default SlideShow;