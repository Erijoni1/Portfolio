import React from 'react'
import './styles/Banner2.scss'
import {Link} from 'react-router-dom'
import { FormattedMessage } from 'react-intl'
const Banner2 = () => {
  return (
    <div className="Home-Landing-Banner2">
        <div className="text_container">
            <h1><FormattedMessage id='first-name' defaultMessage='For over two years, we have been changing websites performance for better, paying particular attention to the most vulnerable  detalist  circumstances.' /></h1>
         <div className="links">
            <Link to="/" className="hover-button">Donate now</Link>
            <Link to="/" className="second"> Learn more</Link>
         </div>
         <div className="border1"></div>
         <div className="border1 border2"></div>
         <div className="border1 border3"></div>
        </div>
    </div>
  )
}

export default Banner2