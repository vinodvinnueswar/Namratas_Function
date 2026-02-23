import React from 'react'

const Location = () => {
  return (
    <div className="Location_Container">
        <h2 data-aos="fade-up">Location</h2>
        <div className="Iframe" data-aos="fade-up">
           <iframe  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d46774243.48945736!2d48.595295171662755!3d44.31255595469752!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb983399e1432d%3A0x9dab68a78623e120!2sGrand%20Imperial%20Function%20Palace%20chedargat!5e0!3m2!1sen!2sin!4v1771831411544!5m2!1sen!2sin"
           width="300" 
           height="350" 
           style={{border:0}}
           allowfullscreen
           loading="lazy"
            ></iframe>
        </div> <br />
        <div className="btn-location" data-aos="fade-up">
            <a href='https://maps.app.goo.gl/hCbNkJf1CK2fiTen7'>View Location</a>
        </div>
    </div>
  )
}

export default Location


