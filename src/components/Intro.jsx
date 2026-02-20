import React from 'react'
import Girl_Img from '../assets/Images/Girl_Img.png'

const Intro = () => {
  return (
    <div className="Intro_Container">
        <div className="Intro_Details">
            <p>Join us to celebrate</p> <br />
             <div className="gold-text">
                  <div className="text">
                <h2>Namrata's</h2>
                <h3>Half-Saree Function</h3>
            </div>
             </div>
            <br />
            <div className="Event_Details_Img">
                <p>Friday, <br />
                 22nd June 2026</p>
                 <br />
                 <p>11:30 PM</p>
                 <br />
                 <p>Grand Imperial <br />
                    456 celebration Rd, <br />
                    Hyderabad.
                 </p>

                 <img src={Girl_Img} alt="" />

            </div>
        </div>
    </div>
  )
}

export default Intro