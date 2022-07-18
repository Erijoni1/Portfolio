import React from 'react'
import Navbar from '../../components/shared/Navbar/Navbar'
import Footer from '../../components/shared/Footer/Footer'
import HomeLandings from '../../components/pages/HomeLanding/HomeLanding'
import EducationAcademy from '../../components/pages/HomeLanding/EducationAcademy'
import Banner2 from '../../components/pages/HomeLanding/Banner2'
// import Subsribe from '../../components/shared/Subscribe/Subscribe'
import Future from '../../components/pages/HomeLanding/Future'
import Institute from '../../components/pages/HomeLanding/Institute'
import Practise from '../../components/pages/HomeLanding/Practise'
import Help from '../../components/pages/HomeLanding/Help'
import Feature from '../../components/pages/HomeLanding/Feature'
import Profesor from '../../components/pages/HomeLanding/Profesor'
// import Partners from '../../components/shared/Partners/Partners'
import Banner3 from '../../components/pages/HomeLanding/Banner3'
import Community from '../../components/pages/HomeLanding/Community'
import SpeakCommunity from '../../components/pages/HomeLanding/SpeakCommunity'
const HomeLanding = () => {
  return (
     <div className="HomeLanding">
        <Navbar />
        <HomeLandings />
        <EducationAcademy />
        <Banner2/>
        <Future />
        <Institute />
        <Practise />
        <Help />
        <Feature />
        <Profesor/>
        {/* <Partners />
        <Subsribe /> */}
        <Banner3/>
        <Community/>
        <SpeakCommunity/>
        <Footer />
     </div>
  )
}

export default HomeLanding