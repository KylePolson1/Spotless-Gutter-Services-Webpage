import React from 'react';
import './Footer.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
          Contact Us Today
        </p>
        <p className='footer-subscription-text'>
          Call or Text: +1 618-960-4269
        </p>
        <p className='footer-subscription-text'>
          Email: SpotlessGutterServices@gmail.com
        </p>
      </section>

      <section class='social-media'>
        <div class='social-media-wrap'>
          <div class='footer-logo'>
            <Link to='/' className='social-logo'>
              Spotless Gutter Services
              <img src="/sgs charcoal background.png" alt="Logo" width="160" height="80" />
            </Link>
          </div>
          <div class='social-icons'>
            <a
              class='social-icon-link facebook'
              href='https://www.facebook.com/profile.php?id=100093983244043'
              target='_blank'
              rel='noopener noreferrer'
              aria-label='Facebook'
            >
              <i class='fab fa-facebook-f' />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
