import React from 'react'
import './Hero.css'

const Hero = () => {
  return (
    <div>
        <div className="contact-hero">
            <div className="left-side">
                <span className='title'>Every Pet Deserves Celebrity Care</span>
                <span className="passage">Efficiently unleash cross-media information without cross-media value quickly maximize timely deliverables for real-time schemas.</span>
                <button className="contact-button">
                    Contact Us
                </button>
            </div>
            <div className="right-side">
                <div className="large-circle"></div>
                <div className="mid-circle"></div>
                <div className="small-circle"></div>
                <img src="/cute-puppy-png.png" alt="" className="cute-puppy" />
            </div>
        </div>
        <div className="info-hero">
            <div className="left-side">
                <video controls>
                    <source src="/dog-healthcare.mp4" type="video/mp4" />
                </video>
            </div>
            <div className="right-side">
                <span className="title">Start your adoption journey with us</span>
                <span className="passage">Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat dignissimos vitae repudiandae rerum explicabo aliquam blanditiis quibusdam velit voluptate, maiores nihil veritatis exercitationem similique eos quidem nulla odit quod? Ut!</span>
                <button className="read-more-button">Read more</button>
            </div>
        </div>
    </div>
  )
}

export default Hero