import React,{useState} from 'react'
import { FormattedMessage } from 'react-intl'
import './styles/Help.scss'
import {MdOutlineArrowForward} from 'react-icons/md'
import {Tabs, Tab, TabPanel, TabList} from 'react-tabs'
import { Helps, DoMore } from './data'
import Carousel from 'react-elastic-carousel'
import { Link } from 'react-router-dom'

const breakPoints=[
    {width:1, itemsToShow:1},
    {width:550,itemsToShow:2},
    {width:900,itemsToShow:3},
    {width:1300, itemsToShow:4}
  ]
const Help = () => {
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
    const [selectedTab, setSelectedTab]= useState(0);
  return (
    <div className="Help-container">
        <h1><FormattedMessage id="help1" defaultMessage="Help us do more"/></h1>
     <div className="tabs">
        <Tabs selectedIndex={selectedTab} onSelect={index => setSelectedTab(index)}>
             <TabList>
                {Helps.map((props)=>{
                    return (
                        <Tab>
                            <h5>{props.title}</h5>
                        </Tab>
                    )
                })}
             </TabList>
        </Tabs>
        <div className="button">
            <p>See all</p>
            <div><MdOutlineArrowForward className="arrow-right"/></div>
        </div>
     </div>
      <div className="help-items">
      <Carousel className='carousel' data-aos="fade-up" data-aos-anchor-placement="top-bottom"
                breakPoints={breakPoints}
                ref={carouselRef}
                onPrevStart={onPrevStart}
                onNextStart={onNextStart}
                disableArrowsOnEnd={false}>
                    {DoMore.map((props)=>{
                        return(
                            <div className="item-container">
                                <div className="bg"></div>
                                <div className="image-container">
                                    <div className='icon' style={{content:`url(${props.img})`}}></div>
                                    <div className="arrow-right"><MdOutlineArrowForward/></div>
                                    <div className="text-container">
                                        <div className="top">
                                            <div className='icon2' style={{content:`url(${props.icon})`}}></div>
                                            <p>{props.title}</p>
                                        </div>
                                        <p>{props.title2}</p>
                                    </div>
                                </div>
                                <div className="bottom-text">
                                    <p>{props.title3}</p>
                                       <div className="bottom-dollars">
                                         <div className="left">
                                            <div className="icon-dollar"></div>
                                             <div className="raise">
                                                <p>raised</p>
                                                <h6>$5600.36</h6>
                                             </div>
                                         </div>
                                         <div className="middle">
                                         <div className="icon-dollar"></div>
                                            <div className="raise">
                                                    <p>aim</p>
                                                    <h6>$1000.36</h6>
                                                </div>
                                         </div>
                                         <div className="right">
                                            <Link to='/'>Donate now</Link>
                                         </div>
                                       </div>
                                </div>
                            </div>
                        )
                    })}
                </Carousel>
      </div>
    </div>
  )
}

export default Help