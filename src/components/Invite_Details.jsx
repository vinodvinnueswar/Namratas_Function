import React from 'react'
import Girl_Img from '../assets/Images/Girl_Img2.png'

const Invite_Details = () => {
  return (
    <div className="Invite_Details_Container">
        <h2>You're Invited</h2>
        <div className="Details">
            <h3>We</h3>
            <br />
            <h3>Madali Ragu Ram <br />
                & Madali Raja Kumari
            </h3>
            <br />

            <p>Invite you all for our princess <br />
               Half-Saree Function
            </p>
            <br />

            <img src={Girl_Img} alt="" />
        </div>
    </div>
  )
}

export default Invite_Details