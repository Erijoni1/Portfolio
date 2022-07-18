import React from 'react'
import './styles/Banner3.scss'
import { Link } from 'react-router-dom'
import { Cycle } from './data';
import { FormattedMessage } from 'react-intl';
const Banner3 = () => {
  return (
    <div className="HomeLanding-Banner3">
         <div className="item-center ">
           <Link to='/' className="hover-button"><FormattedMessage id='teacher4' defaultMessage='View all' /></Link>
        </div>
        <h1><FormattedMessage id='banner-1' defaultMessage='We break the cycle of poverty through professional websites' /></h1>
        <div className="item-spacebetween">
            <div className="left-provider">
                <h1><FormattedMessage id='banner-1' defaultMessage='We provide holistic education programs focused on these key areas:' /></h1>
                <p><FormattedMessage id='banner-2' defaultMessage='We are a progressive team dedicated to breaking the cycle of poverty through professional, support, detalist, and social services.' /></p>
                <Link to="/" className="hover-button"><FormattedMessage id='banner-2' defaultMessage='Learn more' /></Link>
            </div>
            <div className="right-provider item-spacebetween">
                {Cycle.map((props)=>{
                    return(
                        <div className="cycle-item ">
                            <Link to={props.to} className="link ">
                                <div className="icon-container">
                                    <div className={`inner-icon ${props.cls}`}>
                                        <div className="icon" style={{content: `url(${props.icon})`}}></div>
                                    </div>
                                </div>
                                <p className="shared-text">{props.title}</p>
                            </Link>
                        </div>
                    )
                })}
            </div>
        </div>
    </div>
  )
}

export default Banner3