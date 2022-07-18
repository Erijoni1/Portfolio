import React, { useState } from "react";
import "./Footer.scss";
import { FooterData, Terms } from "./data";
import { Link } from "react-router-dom";
import { BsTelephone } from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";
import SelectLanguage from "../SelectLanguage/SelectLanguage";
const Footer = (props) => {
  return (
    <div className="shared-footer">
      <div className="inner-footer">
        <div className="left__footer">
          {FooterData.map((props) => {
            return (
              <div className="footer-list">
                <h6>{props.category}</h6>
                <div className="links">
                  {props.links.map((l) => {
                    return (
                      <Link key={l.to} to={l.to} className="footer-item">
                        {l.link}
                      </Link>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
        <div className="right-footer">
          <Link to="/" className="Logo">
            <div className="icon"></div>
            <h6>
              Kosova<span>Education</span>
            </h6>
          </Link>
          <p>
            Our goal is to develop high performance and professional website.
          </p>
          <div className="buttons">
            <Link to="/" className="donate">
              Donate
            </Link>
            <Link to="/">Sponsor</Link>
          </div>
          <div className="media">
            <p>Follow us:</p>
            <div className="fb"></div>
            <div className="insta"></div>
            <div className="twiter"></div>
            <div className="in"></div>
          </div>
          <div className="contacts">
            <div className="phone">
              <BsTelephone />
              <p>Contacts : ‎+383 (44) 111 000</p>
            </div>
            <div className="email">
              <HiOutlineMail />
              <p>Email : ‎erijoni.344@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
      <div className="app">
        <p>Download our Learning App for free</p>
       <a href="https://store.google.com/" className='google'></a>
       <a href="https://www.apple.com/" className='app1'></a>
      </div>
      <div className="right-reserved">
        <div className="first">
          <p>© 2022 ErionPortfolio. All Rights Reserved</p>
        </div>
        <div className="middle">
          {Terms.map((props) => {
            return (
              <Link to="/" className="item">
                <p>{props.title}</p>
              </Link>
            );
          })}
        </div>
        <div className="third">
          <Link to="/" className="setting"></Link>
          <Link to="/" className="sun"></Link>
          <SelectLanguage
            setLanguage={props.setLanguage}
            language={props.language}
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;
