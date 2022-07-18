import React from 'react'
import './styles/Profesor.scss'
import { FormattedMessage } from 'react-intl';
import Carousel from 'react-elastic-carousel'
import { Teachers } from './data';
import {Link} from 'react-router-dom'
const Profesor = () => {

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

    const breakPoints=[
        {width:1, itemsToShow:1},
        {width:450,itemsToShow:2},
        {width:800,itemsToShow:3},
        {width:900, itemsToShow:4},
        {width:1000,itemsToShow:5}
      ]
  return (
    <div className="main-margin">
        <h1 className="middle-title"> <FormattedMessage id='teacher' defaultMessage='Featured Teachers, Professors & Instructors' /></h1>
        <Carousel className='carousel' data-aos="fade-up" data-aos-anchor-placement="top-bottom"
                breakPoints={breakPoints}
                ref={carouselRef}
                onPrevStart={onPrevStart}
                onNextStart={onNextStart}
                disableArrowsOnEnd={false}>
                 {Teachers.map((props)=>{
                    return (
                        <div className="items">
                                <div className="icon-container">
                                    <div className={`inner-icon ${props.cls}`}>
                                         <div className='icon' style={{content:`url(${props.icon})`}}></div>
                                    </div>
                             </div>
                             <div className="info">
                                 <div className="ticks">
                                    <h6>{props.title}</h6>
                                    <div className="ticket"></div>
                                 </div>
                                 <p className="shared-text">{props.paragraph}</p>
                                 <div className="links">
                                   <Link to="/" className='hover-button2'><FormattedMessage id='teacher1' defaultMessage='Follow' /></Link>
                                    <Link to="/" className="hover-button2 button3"><FormattedMessage id='teacher2' defaultMessage='Visit profile' /></Link>
                                 </div>
                             </div>
                        </div>
                    )
                 })}
        </Carousel>
        <div className="item-center">
           <Link to='/' className="hover-button"><FormattedMessage id='teacher4' defaultMessage='View all' /></Link>
        </div>
    </div>
  )
}

export default Profesor