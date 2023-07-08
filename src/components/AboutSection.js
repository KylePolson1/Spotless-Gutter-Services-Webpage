import React from 'react';
import '../App.css';
import './AboutSection.css';

function AboutSection() {
    return (
        <div style={{ background: '#242424' }} className='about-section'>
            <h1 className = 'about-title'>About Us</h1>
            <meta name="description" content="Learn about our professional gutter cleaning services in Edwardsville, Illinois. We provide reliable gutter cleaning solutions for residential and commercial properties. Contact us today for a free quote."></meta>
            <body>
                <div class="about-text">
                    <p style={{marginLeft: '100px', marginRight: '100px'}}> At Spotless Gutter Services, based in Edwardsville, Illinois, we specialize in providing top-quality gutter cleaning solutions for both residential and commercial properties.
                        Our experienced and reliable team is committed to delivering exceptional gutter cleaning services. We use the latest tools and techniques
                        to efficiently clean your gutters, unclog any blockages, and restore proper water flow. As local gutter cleaning experts, we understand the unique needs of properties in Edwardsville
                        and tailor our services accordingly. Contact us today for a free quote and let us help you maintain clean and functional gutters all year round.
                    </p>
                </div>
            </body>
        </div>
    );
}

export default AboutSection;
