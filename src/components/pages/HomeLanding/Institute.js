import React ,{useState} from 'react'
import './styles/Institute.scss'
import {MdOutlineArrowBack, MdOutlineArrowForward} from 'react-icons/md'
import {Tabs, Tab, TabPanel, TabList} from 'react-tabs'
import { Institutes ,Educations} from './data'
import Carousel from 'react-elastic-carousel'
import { Link } from 'react-router-dom'

const breakPoints=[
    {width:1, itemsToShow:1},
    {width:450,itemsToShow:2},
    {width:900,itemsToShow:3},
    {width:1050, itemsToShow:4}
  ]
const Institute = () => {
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

    const [selectedTab , setSelectedTab] =useState(0)
    const tabCount = 6;
  return (
    <div className="Institute-Home">
        <div>
            <h1>Best educational institutions for kids</h1>
        </div>

        <div>
         <Tabs selectedIndex={selectedTab} onSelect={index => setSelectedTab(index)}>
            <TabList>
                <button className="arrow-left" onClick={() =>setSelectedTab((selectedTab + tabCount-1) % tabCount)}>
                <MdOutlineArrowBack/>
                </button>
                {Institutes.map((props)=>{
                    return (
                        <Tab>
                            <h5>{props.title}</h5>
                        </Tab>
                    )
                })}
                  <button  className='arrow-right'
                        onClick={() => setSelectedTab((selectedTab + 1) % tabCount )}>
                            <MdOutlineArrowForward/>
                    </button>
            </TabList>
            <div className="institute-container">
                <Carousel className='carousel' data-aos="fade-up" data-aos-anchor-placement="top-bottom"
                breakPoints={breakPoints}
                ref={carouselRef}
                onPrevStart={onPrevStart}
                onNextStart={onNextStart}
                disableArrowsOnEnd={false}>
                        {Educations.map((props)=>{
                            return (
                                <div className="int-container">
                                   <div className="image-container">
                                   <div className="profile" style={{content: `url(${props.img})`}}></div>
                                    <div className="friend_container">
                                        <div className="icm"></div>
                                        <p>{props.title}</p>
                                    </div>
                                    <div className="text-cont">
                                        <h1>{props.title2}</h1>
                                        <p>{props.title3}</p>
                                    </div>
                                    <div className="locations">
                                        <div className="left">
                                            <div className="l-icon"></div>
                                            <p>Prishtine,Kosove</p>
                                        </div>
                                        <p>Visit profile</p>
                                    </div>
                                   </div>
                                </div>
                            )
                        })}
                        
                </Carousel>
                </div>
         </Tabs>
        </div>
        <div className="item-center">
           <Link to='/' className="hover-button">View more</Link>
        </div>
    </div>
  )
}

export default Institute