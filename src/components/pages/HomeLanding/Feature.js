import React from 'react'
import './styles/Feature.scss'
import Carousel from 'react-elastic-carousel'
import { FormattedMessage } from 'react-intl'
import { Features } from './data'
import { Link } from 'react-router-dom'

const breakPoints=[
    {width:1, itemsToShow:1},
    {width:650,itemsToShow:2},
    {width:900,itemsToShow:3},
    {width:1300, itemsToShow:4}
]
const Feature = () => {
    const carouselRef= React.useRef(null);
    const onNextStart=(currentItem, nextItem)=>{
        if(currentItem.index===nextItem.index){
            carouselRef.current.goTo(0);
        }
    }
    const onPrevStart=(currentItem, nextItem)=>{
        if(currentItem.index===nextItem.index){
            carouselRef.current.goTo('single-slide'.length)
        }
    }
  return (
    <div className="feature-container">
        <h1><FormattedMessage id="feature" defaultMessage='Featured Courses'/></h1>
       <div>
       <Carousel className='carousel'
                breakPoints={breakPoints}
                ref={carouselRef}
                onPrevStart={onPrevStart}
                onNextStart={onNextStart}
                disableArrowsOnEnd={false}>
                  {Features.map((props)=>{
                    return (
                        <div className="items">
                            <div className="main-item">
                                 <div className='bg'></div>
                                <div className="item">
                                    <div className="icon-container">
                                        <div className={`inner-icon ${props.cls}`}>
                                        <div className='icon' style={{content:`url(${props.icon})`}}></div>
                                        </div>
                                    </div>
                                    <div className="text">
                                    <h3>{props.title}</h3>
                                    <p>{props.title2}</p>
                                </div>
                                </div>
                              <div> 
                                <div className="calendar-container">
                                   <div className="month">
                                     <div className="c1"></div>
                                     <p>3 months</p>
                                   </div>
                                   <div className="dollar">
                                     <div className="c2"></div>
                                     <p>250%</p>
                                   </div>
                                   <div className="hour">
                                     <div className="c3"></div>
                                     <p>2hr/daily</p>
                                   </div>
                                </div>
                                <div className="starts">
                                    <div className="s1"></div>
                                    <div className="calendar-start">
                                        <p>starts:</p>
                                        <p>12.05.2022</p>
                                    </div>
                                    <div className="s1"></div>
                                    <div className="calendar-start1">
                                        <p>starts:</p>
                                        <p>12.05.2022</p>
                                    </div>
                                </div>

                                <div className="outkos">
                                    <div className="left-outkos">
                                        <p>Course offered by:</p>
                                        <div className='outkos-icon' style={{content:`url(${props.icon2})`}}></div>
                                    </div>
                                    <Link to="/"><FormattedMessage id='fe1' defaultMessage='Enroll' /></Link>
                                </div>
                            </div>
                            </div>
                            </div>
                    )
                  })}
         </Carousel>
       </div>
               <div className="item-center">
                     <Link to='/' className="hover-button"><FormattedMessage id='fe-2' defaultMessage='View all' /></Link>
                  </div>
    </div>
  )
}

export default Feature