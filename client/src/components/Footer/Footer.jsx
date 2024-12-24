import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faTwitter, faYoutube } from "@fortawesome/free-brands-svg-icons";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      {/* Top Section */}
      <div className="footer-top">
        {/* Popular Locations */}
        <div className="footer-column">
          <h3>POPULAR LOCATIONS</h3>
          <ul>
            <li>Kolkata</li>
            <li>Mumbai</li>
            <li>Chennai</li>
            <li>Pune</li>
          </ul>
        </div>
        {/* Trending Locations */}
        <div className="footer-column">
          <h3>TRENDING LOCATIONS</h3>
          <ul>
            <li>Bhubaneswar</li>
            <li>Hyderabad</li>
            <li>Chandigarh</li>
            <li>Nashik</li>
          </ul>
        </div>
        {/* About Us */}
        <div className="footer-column">
          <h3>ABOUT US</h3>
          <ul>
            <li>Tech@OLX</li>
          </ul>
        </div>
        {/* OLX */}
        <div className="footer-column">
          <h3>OLX</h3>
          <ul>
            <li>Blog</li>
            <li>Help</li>
            <li>Sitemap</li>
            <li>Legal & Privacy information</li>
            <li>Vulnerability Disclosure Program</li>
          </ul>
        </div>
        {/* Follow Us */}
        <div className="footer-column follow-us">
          <h3>FOLLOW US</h3>
          <div className="social-icons">
            <a href="#"><FontAwesomeIcon icon={faFacebook} size="1x" /></a>
            <a href="#"><FontAwesomeIcon icon={faInstagram} size="1x" /></a>
            <a href="#"><FontAwesomeIcon icon={faTwitter} size="1x" /></a>
            <a href="#"><FontAwesomeIcon icon={faYoutube} size="1x" /></a>
          </div>
          <div className="app-links">
            <a href="#">
              <img src="https://via.placeholder.com/120x40?text=Google+Play" alt="Google Play" />
            </a>
            <a href="#">
              <img src="https://via.placeholder.com/120x40?text=App+Store" alt="App Store" />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="footer-bottom">
        <div className="footer-logos">
          <img src="/icons/cartrade_tech.svg" alt="CarTradeTech" />
          <img src="/icons/olx.svg" alt="OLX" />
          <img src="/icons/carwale.svg" alt="Carwale" />
          <img src="/icons/bikewale.svg" alt="Bikewale" />
          <img src="/icons/cartrade.svg" alt="CarTrade" />
          <img src="/icons/mobility.svg" alt="Mobility Outlook" />
        </div>
        <div className="footer-text">
          <p>All rights reserved &copy; 2006-2024 OLX</p>
          <p>
            <a href="#">Help</a> | <a href="#">Sitemap</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
