import React from 'react'
import './styles/Education.scss'
import {Link} from 'react-router-dom'
import { FormattedMessage } from 'react-intl'

const EducationAcademy = () => {
  return (
    <div className="Education-Academy-Home">
        <div className="Education-left">
          <div className="logo">
            <div className="icon"></div>
            <h6> <FormattedMessage id='education' defaultMessage='Erion' /> <span> <FormattedMessage id='educ-1' defaultMessage='Portfolio' /></span></h6>
          </div>
          <h1><FormattedMessage id='education2' defaultMessage='We uphold education and learning' /></h1>
          <p><FormattedMessage id='education3' defaultMessage='We uphold education and learning as essential to the development of all people and societies. We also recognize that children are our hope for the future. Therefore, we must attend to children’s education, health, well-being, and safety so they can learn, grow, and develop optimally.' /></p>
         <Link to="/" className='hover-button'> <FormattedMessage id='education4' defaultMessage='Learn more' /></Link>
        </div>
        <div className="Education-right">
            <div className="girl"></div>
            <div className="border border1"></div>
            <div className="girl2"></div>
            <div className="text">
                <p> <FormattedMessage id='education5' defaultMessage='The future is safe with us' /></p>
                <Link to="/"> <FormattedMessage id='education6' defaultMessage='Read Story' /></Link>
            </div>
            <div className="border border2"></div>
        </div>
    </div>
    
  )
}

export default EducationAcademy