
import React from 'react'
import {
  WhatsappShareButton,
  FacebookShareButton,
  TwitterShareButton,
  LinkedinShareButton,
  WhatsappIcon,
  FacebookIcon,
  TwitterIcon,
  LinkedinIcon
} from "react-share";


const Social_Share = () => {
    const shareUrl = "https://ayesha-imran.vercel.app/";
  const title = "You're invited to our wedding! 💍";
  return (
    <div className="Social_Share">
        <h2>Social Share</h2>
        <div className="Media">
            <h3>Share Invitation</h3> <br />
            <div style={{display:"flex", gap:"15px", justifyContent:"center"}}>
                  
                            <WhatsappShareButton url={shareUrl} title={title}>
                                <WhatsappIcon size={40} round />
                            </WhatsappShareButton>
            
                            <FacebookShareButton url={shareUrl} quote={title}>
                                <FacebookIcon size={40} round />
                            </FacebookShareButton>
            
                            <TwitterShareButton url={shareUrl} title={title}>
                                <TwitterIcon size={40} round />
                            </TwitterShareButton>
            
                            <LinkedinShareButton url={shareUrl} title={title}>
                                <LinkedinIcon size={40} round />
                            </LinkedinShareButton>
            
                        </div>
                        
        </div>
        <div className="Footer">
        <h3>InviteDigitly</h3> <br />
        <div className="Footer-row">
            <p>Do you want to look your <br />
             Invitation Like this?</p>
            <a href="">
                click here
            </a>
        </div>
    </div>
    </div>
  )
}

export default Social_Share