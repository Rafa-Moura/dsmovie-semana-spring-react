import React from "react";
import './styles.css'

import { ReactComponent as GithubIcon } from "assets/img/github.svg";

const Navbar: React.FC = () => {
  return (
    <header>
      <nav className="container">
        <div className="dsmovie-nav-content">
          <h1>DSMovie</h1>
          <a
            href="https://github.com/Rafa-Moura"
            target="_blank"
            rel="noreferrer"
          >
            <div className="dsmovie-contact-container">
              <GithubIcon />
              <p className="dsmovie-contact-link">/Rafa-Moura</p>
            </div>
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
