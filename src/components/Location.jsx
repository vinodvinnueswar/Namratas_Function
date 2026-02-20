import React from 'react'

const Location = () => {
  return (
    <div className="Location_Container">
        <h2 data-aos="fade-up">Location</h2>
        <div className="Iframe" data-aos="fade-up">
           <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15306453.112303648!2d66.26398718755223!3d20.509217387661373!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39631d7cd83ce825%3A0xe5fcb7c64701d453!2sRoyal%20Orchid%20Resort%20%26%20Banquet%20Hall!5e0!3m2!1sen!2sin!4v1770558699926!5m2!1sen!2sin" 
           width="300" 
           height="350" 
           style={{border:0}}
           allowfullscreen
           loading="lazy"
            ></iframe>
        </div> <br />
        <div className="btn-location" data-aos="fade-up">
            <a href='https://maps.app.goo.gl/6mrrnvScrAfoto4BA'>View Location</a>
        </div>
    </div>
  )
}

export default Location