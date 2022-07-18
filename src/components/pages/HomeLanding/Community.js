import React from 'react'
import './styles/Community.scss'
import { FormattedMessage } from 'react-intl'
import { Communitys } from './data'
import { Link } from 'react-router-dom'
const Community = () => {
  return (
    <div className="main">
        <h1><FormattedMessage id="community" defaultMessage='Join our Community'/></h1>
        <div className="items-community">
            {Communitys.map((props)=>{
                return (
                    <div className="item">
                        <div className="icon1"></div>
                         <div className="main-item">
                                <div className="top-container ">
                                <div className="inner-img">
                                        <div className="circle"></div>
                                        <div className='icon' style={{content:`url(${props.img})`}}></div>
                                    </div>
                                </div>
                                <div className="info">
                                    <h4>{props.title}</h4>
                                    <p className='shared-text'>{props.paragraph}</p>
                                    <Link to="/" className="link">{props.button}</Link>
                                </div>
                         </div>
                    </div>
                )
            })}
        </div>
        <div className="item-center">
           <Link to='/' className="hover-button"><FormattedMessage id='community' defaultMessage='Learn more' /></Link>
        </div>
    </div>
  )
}

export default Community