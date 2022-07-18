import React, { useState, useEffect } from "react";
import "./Navbar.scss";
import { Link } from "react-router-dom";
import clsx from "clsx";
import SelectLanguage from "../SelectLanguage/SelectLanguage";
import { FormattedMessage } from "react-intl";
import { BsTriangleFill } from "react-icons/bs";
import { MdKeyboardArrowDown } from "react-icons/md";
import { NavData, MainData } from "./data";
import MobileNav from "../MobileNav/MobileNav";
const Navbar = (props) => {
  const [isSticky, setIsSticky] = useState(false);
  useEffect(() => {
    const nav = document.querySelector(".navbar");
    const navHeight = nav.scrollHeight;

    const handleScroll = () => {
      const scrollHeight = window.pageYOffset;
      setIsSticky(scrollHeight > 20 ? true : false);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div
      id="navbar"
      className={clsx(`navbar ${props.styles}`, isSticky ? "nav__sticky" : "")}
    >
      <div className="container__nav">
        <div className="nav__top">
          <div className="profile">
            <SelectLanguage
              setLanguage={props.setLanguage}
              language={props.language}
            />
            <a href="https://www.facebook.com/"className="fb"></a>
            <a href="https://www.instagram.com/"className="insta"></a>
            <a href="https://www.twiter.com/"className="twit"></a>
            <a href="https://www.linkedin.com/"className="in"></a>
          </div>

          <div className="nav-second">
            {NavData.map((dt) => {
              return (
                <div className="item">
                  <Link to="/">{dt.title}</Link>
                  <div className="search">
                    <p>{dt.title1}</p>
                    {dt.icon}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="nav__bottom">
          <Link to="/" className="Logo">
            <div className="icon"></div>
            <h6>
              Erion<span>Portfolio</span>
            </h6>
          </Link>

          <div className="nav__links">
            {MainData.map((props) => {
              return (
                <div className={`nav-link ${props.cls}`}>
                  <Link to={props.to} className="inner-nav-link">
                    {props.link}
                    {props.megamenu ? (
                      <MdKeyboardArrowDown className="arrow" />
                    ) : null}
                  </Link>
                  {props.megamenu ? (
                    <div className="megamenu-arrow">
                      <BsTriangleFill />
                    </div>
                  ) : null}
                  <div className="line"></div>
                  {props.megamenu}
                </div>
              );
            })}
          </div>

          <div className="shop__login">
            <div className="heart__logo"></div>
            <div className="shop__logo"></div>
            <Link to="/">Log in</Link>
            <Link to="/" className="button">
              Sign up
            </Link>
          </div>
        </div>
      </div>
      <MobileNav />
    </div>
  );
};

export default Navbar;
