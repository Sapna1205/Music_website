import React from 'react';
import "./footer.css";
import { Link } from 'react-router-dom';


function Footer() {
    return (
        <div className="footer-container">
            
            <section className="footer-subscription">
                <p className="footer-subscription-heading">
                    Join us to bring best from you.
                </p>
                <p className="footer-subscription-text">
                    Make your dreams come true.
                </p>
                <div className="input-areas">
                    <form>
                        <input type="email" name="email" placeholder="Your email." className="footer-input" />
                    </form>
                </div>
            </section>

            <div className="footer-links">

                <div className="footer-link-wrapper">
                    <div className="footer-link-items">
                        <h2>About us</h2>
                        <Link to='/aboutUs'>How we work?</Link>
                        <Link to='/aboutUs'>Testimonials</Link>
                        <Link to='/aboutUs'>Careers</Link>
                        <Link to='/aboutUs'>Investors</Link>
                        <Link to='/aboutUs'>Terms of services</Link>
                    </div>
                    <div className='footer-link-items'>
                        <h2>Contact Us</h2>
                        <Link to='/services'>Contact</Link>
                        <Link to='/services'>Support</Link>
                        <Link to='/services'>Destinations</Link>
                        <Link to='/services'>Sponsorships</Link>
                    </div>
                </div>

                <div className='footer-link-wrapper'>
                    <div class='footer-link-items'>
                        <h2>Videos</h2>
                        <Link to='/'>Submit Video</Link>
                        <Link to='/'>Ambassadors</Link>
                        <Link to='/'>Agency</Link>
                        <Link to='/'>Influencer</Link>
                    </div>
                    <div className='footer-link-items'>
                        <h2>Social Media</h2>
                        <Link to='/'>Instagram</Link>
                        <Link to='/'>Facebook</Link>
                        <Link to='/'>Youtube</Link>
                        <Link to='/'>Twitter</Link>
                    </div>
                </div>

            </div>

            <section className='social-media'>

                <div className='social-media-wrap'>
                    <div className='footer-logo'> 
                        <Link to='/' className='social-logo'>
                         <i className='fas fa-headphones-alt' /> Music
                        </Link>
                    </div>

                    <small className='website-rights'>Music © 2020</small>

                    <div className='social-icons'>
                        <Link
                        className='social-icon-link facebook'
                        to='/'
                        target='_blank'
                        aria-label='Facebook'
                        >
                        <i className='fab fa-facebook-f' />
                        </Link>
                        <Link
                        className='social-icon-link instagram'
                        to='/'
                        target='_blank'
                        aria-label='Instagram'
                        >
                        <i className='fab fa-instagram' />
                        </Link>
                        <Link
                        className='social-icon-link youtube'
                        to='/'
                        target='_blank'
                        aria-label='Youtube'
                        >
                        <i className='fab fa-youtube' />
                        </Link>
                        <Link
                        className='social-icon-link twitter'
                        to='/'
                        target='_blank'
                        aria-label='Twitter'
                        >
                        <i className='fab fa-twitter' />
                        </Link>
                        <Link
                        className='social-icon-link linkedin'
                        to='/'
                        target='_blank'
                        aria-label='LinkedIn'
                        >
                        <i className='fab fa-linkedin' />
                        </Link>
                    </div>

                </div>
      </section>
           
        </div>
    );
}

export default Footer;
