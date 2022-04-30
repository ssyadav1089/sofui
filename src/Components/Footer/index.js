import React, { Component } from "react";

import { ReactComponent as GitHub } from "../../assets/GitHub.svg";

import "./styles.css";

export default class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <div className="socials">
          <div className="social-item">
            <a href="https://github.com/" target="_blank" rel="noreferrer">
              <GitHub />
            </a>
            <p>
              <strong>Github</strong>
            </p>
          </div>
          <div className="social-item">
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noreferrer"
            >
              <GitHub />
            </a>
            <p>
              <strong>Facebook</strong>
            </p>
          </div>
          <div className="social-item">
            <a href="https://twitter.com/" target="_blank" rel="noreferrer">
              <GitHub />
            </a>
            <p>
              <strong>Twiter</strong>
            </p>
          </div>
        </div>
      </div>
    );
  }
}
