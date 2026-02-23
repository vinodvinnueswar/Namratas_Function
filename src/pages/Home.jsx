import React from 'react'
import Intro from '../components/Intro'
import Photo_Gallery from '../components/Photo_Gallery'
import Invite_Details from '../components/Invite_Details'
import Date_Time from '../components/Date_Time'
import Location from '../components/Location'
import Best_Wishes from '../components/Best_Wishes'
import Social_Share from '../components/Social_Share'
import MusicPlayer from '../components/MusicPlayer'
import Count_Down from '../components/Count_Down'
import OpeningScreen from '../components/OpenScreen'
import { useState } from 'react'


const Home = () => {
  const [open, setOpen] = useState(false);
  return (
     <div className='Home'>

        {/* Show Opening Screen First */}
      {!open && <OpeningScreen onOpen={() => setOpen(true)} />}

       {
        open && (
         <>
          <div className="Home-page">
              <Intro/>
              <Invite_Details/>
              <Date_Time/>
              <Location/>
              <Photo_Gallery/>
              <Best_Wishes/>
              <Count_Down/>
              <Social_Share/>
              <MusicPlayer/>
       </div>
         <p className="mobile-note">
        This invitation is optimized for mobile , you have to experience on mobile 📱
      </p>
         </>
        )
       }
    </div>
  )
}

export default Home

