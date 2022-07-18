import React, { useState } from "react";
import { AiOutlineMail } from "react-icons/ai";
import { Link } from "react-router-dom";
import { MdSentimentSatisfiedAlt } from "react-icons/md";
import "./Subscribe.scss";
const Subscribe = () => {
  const [email, setEmail] = useState("");

  return (
    <div className="subscribe__banner">
      <div className="text_container">
        <Link to="/" className="Logo">
          <div className="icon"></div>
          <h6>
            Kosova<span>Education</span>
          </h6>
        </Link>

        <h3>Subscribe to receive latest inspiring news in your inbox</h3>
      </div>
      <div className="input__container">
        <div className="input_cc">
          <span>
            <AiOutlineMail />
          </span>
          <input
            type="text"
            value={email}
            onChange={(e) => MdSentimentSatisfiedAlt(e.target.value)}
            placeholder="Enter your email"
            className="auth-form-input"
          />
          <button>Subscribe</button>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
