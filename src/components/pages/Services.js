import React from 'react';
import './Services.css';
import Footer from '../Footer';

export default function Services() {
  return (
    <div>
      <div className="container">
        <div className="image">
          <img style={{ width: '500px' }} src="/outside-gutter.jpg" alt="Gutter Image" />
        </div>
        <div style={{ fontSize: '22px' }} className="text-block">
          <h1>Gutter and Downspout Cleaning</h1>
          <p> Keep your gutters clean and your property protected with Spotless Gutter Services. 
            Our skilled team efficiently clears debris from gutters and downspouts, ensuring optimal performance and preventing water damage. 
            Don't let clogged gutters disrupt your routine or compromise your home's foundation – trust a professional to deliver exceptional results.
            At Spotless Gutter Services, customer satisfaction is our top priority. 
            We pride ourselves on punctuality, professionalism, and attention to detail. 
            Schedule a free estimate today. 
            We value your time and aim to complete the job promptly without compromising quality.
            Don't let debris and clogs damage your home – reach out to us today and let us handle 
            your gutter cleaning needs. Protect your property with our reliable and professional gutter cleaning service. Contact us now to 
            schedule an appointment and experience the difference we can make for your gutters. Trust us to keep your gutters clean and functioning 
            optimally, ensuring the longevity and well-being of your property.</p>
        </div>

      </div>
      <Footer />
      </div>
      );
}