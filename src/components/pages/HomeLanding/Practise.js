import React from 'react'
import './styles/Practise.scss'
import Carousel from 'react-elastic-carousel'
import { Practice } from './data'
import { AiOutlineArrowRight } from 'react-icons/ai'
const breakPoints=[
    {width:1, itemsToShow:1},
    {width:450,itemsToShow:2},
    {width:900,itemsToShow:3},
    {width:1050, itemsToShow:4}
  ]
const Practise = () => {
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
     <div className="Practise_home">
        <h1>Our Practice Areas</h1>
        <div className="practice-items">
        <Carousel className='carousel' data-aos="fade-up" data-aos-anchor-placement="top-bottom"
                breakPoints={breakPoints}
                ref={carouselRef}
                onPrevStart={onPrevStart}
                onNextStart={onNextStart}
                disableArrowsOnEnd={false}>
                    <div className="items-practice item-center">
                        {Practice.map((props)=>{
                            return(
                                <div className="itm-practice">
                                    <div className="bg"></div>
                                     <div className="top-container">
                                        <div className="inner-img">
                                            <div className="circle"></div>
                                            <div className='icon' style={{content:`url(${props.img})`}}></div>
                                        </div>
                                     </div>
                                    <div className="p-text">
                                        <h1>{props.title}</h1>
                                        <p>{props.title2}</p>
                                    </div>
                                    <div className="btn">
                                        <p>Learn more</p>
                                        <AiOutlineArrowRight className="arrow"/>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
        </Carousel>
        </div>
     </div>
  )
}

export default Practise