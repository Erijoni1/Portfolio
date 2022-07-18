import React from 'react'
import './styles/SpeakCommunity.scss'
import Carousel from 'react-elastic-carousel'
import { FormattedMessage } from 'react-intl';
import {MdOutlineArrowForward} from 'react-icons/md'
import { Speaks } from './data';
const breakPoints=[
    {width:1, itemsToShow:1},
]
const SpeakCommunity = () => {
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
    <div className="SpeakCommunity-container">
        <div className="what-container item-spacebetween">
            <h1><FormattedMessage id="speak-community" defaultMessage='What our community says'/></h1>
           <div className="see item-center">
             <p><FormattedMessage id="speak-community1" defaultMessage='See all'/></p>
              <MdOutlineArrowForward />
           </div>
        </div>
         <div className="speak-banner">
            <div className="leftSpeak-container">
                <div className="image"></div>
            </div>
            <div className="rightSpeak-container">
                    <Carousel className='carousel' data-aos="fade-up" data-aos-anchor-placement="top-bottom"
                        breakPoints={breakPoints}
                        ref={carouselRef}
                        onPrevStart={onPrevStart}
                        onNextStart={onNextStart}
                        disableArrowsOnEnd={false}>
                              {Speaks.map((props)=>{
                                return(
                                    <div className="item">
                                         <div className="top-container ">
                                            <div className="inner-img">
                                                    <div className="circle"></div>
                                                    <div className='icon' style={{content:`url(${props.icon})`}}></div>
                                                </div>
                                        </div>
                                        <div className="info">
                                            <p>{props.title}</p>
                                            <div className="paragraph-container item-spacebetween ">
                                                    <div className="paragraph-c1">
                                                        <h6>{props.title2}</h6>
                                                        <p className="p1">{props.paragraph}</p>
                                                    </div>
                                                <div className="icon3" style={{content:`url(${props.icon2})`}}></div>
                                            </div>
                                        </div>
                                    </div>
                                )
                              })}
                        </Carousel>
            </div>
         </div>
    </div>
  )
}

export default SpeakCommunity