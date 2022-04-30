import React, { Component } from "react";

import { ReactComponent as Logo } from "../../assets/Logo.svg";

import "./styles.css";

export default class Footer extends Component {
  render() {
    return (
      <div className="footer dark">
        <div className="socials">
          <div className="social-item">
            <a href="https://github.com/" target="_blank" rel="noreferrer">
              <Logo />
            </a>
          </div>
          <div className="social-item">
            <p>
              <strong>STACK OVERFLOW</strong>
            </p>
            <ul>
              <li>About</li>
              <li>Press</li>
              <li>Work Here</li>
              <li>Contact Us</li>
              <li>Questions</li>
            </ul>
          </div>
          <div className="social-item">
            <p>
              <strong>PRODUCTS</strong>
            </p>
            <ul>
              <li>Teams</li>
              <li>Advertising</li>
              <li>Collectives</li>
              <li>Talent</li>
            </ul>
          </div>
          <div className="social-item">
            <p>
              <strong>POLICIES</strong>
            </p>
            <ul>
              <li>Legal</li>
              <li>Privacy Policy</li>
              <li>Terms of Service</li>
              <li>Cookie Settings</li>
              <li>Cookie Policy</li>
            </ul>
          </div>
          <div className="social-item">
            <p>
              <strong>CHANNELS</strong>
            </p>
            <ul>
              <li>Blog</li>
              <li>Podcast</li>
              <li>Newsletter</li>
              <li>Twitter</li>
              <li>LinkedIn</li>
              <li>Instagram</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
