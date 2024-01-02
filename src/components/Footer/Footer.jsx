/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const Footer = ({ property, className, footerInfoClassName, href, href1 }) => {
  return (
    <div className={`footer property-1-${property} ${className}`}>
      <div className={`footer-info ${footerInfoClassName}`}>
        <div className="contact-info-wrapper">
          <div className="contact-info">
            {property === "desktop" && (
              <div className="footer-message">
                <div className="text-wrapper">Let’s work together</div>
                <p className="i-would-like-to-go">
                  <span className="span">
                    I would like to go into more detail about how my knowledge could relate to your question.
                    <br />
                    Please feel free to contact me to see if we can help each other:
                    <br />
                    <br />
                  </span>
                  <span className="text-wrapper-2">
                    erik.kuiper@outlook.com
                    <br />
                    +31610314881
                    <br />
                    https://www.linkedin.com/in/erikux/
                  </span>
                </p>
              </div>
            )}

            {property === "mobile" && (
              <>
                <div className="footer-message-2">
                  <div className="text-wrapper-3">Let’s work together</div>
                  <p className="p">
                    I would like to go into more detail about how my knowledge could relate to your question.
                    <br />
                    Please feel free to contact me to see if we can help each other:
                  </p>
                </div>
                <a href={href} rel="noopener noreferrer" target="_blank">
                  <img className="img" alt="Icon envelope square" src="/img/icon-envelope-square-1.png" />
                </a>
                <a href={href1} rel="noopener noreferrer" target="_blank">
                  <img className="img" alt="Icon social linkedin" src="/img/icon-social-linkedin-1.png" />
                </a>
                <img
                  className="icon-alternate-phone"
                  alt="Icon alternate phone"
                  src="/img/icon-alternate-phone-square-1.png"
                />
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

Footer.propTypes = {
  property: PropTypes.oneOf(["desktop", "mobile"]),
  href: PropTypes.string,
  href1: PropTypes.string,
};
