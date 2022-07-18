import React from 'react'
import './styles/Future.scss'
// import CountUp from "react-countup";
import { Child } from './data'
const Future = () => {
  return (
    <div className="Future-Home">
        <h1>We care for the future - Courses For Children</h1>
        <p>We encourage each one of our students to be an engaged learner.</p>
     <div className="items-container">
           {Child.map((item)=>{
            return (
                <div className="item-container">
                   <div className="top-container item-center">
                    <div className="border border1"></div>
                    <div className="border border2"></div>
                    <div className='icon1' style={{content:`url(${item.icon})`}}></div>
                   </div>
                   <div className="bottom-container">
                   <div className="bg"></div>
                      <div className='icons' style={{background:`url(${item.img})`}}></div>
                      <div className="text">
                        <h1>{item.title1}</h1>
                        <p>{item.title2}</p>
                      </div>
                   
                 </div>
                    </div>
          
            )
           })}
     </div>
    </div>
  )
}

export default Future