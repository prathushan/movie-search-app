import React from "react";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <h1 className="footer-title">Movie Look</h1>
      <div className="footer-columns">
        <div className="footer-column">
          <h3>Popular Movies</h3>
          <p>Explore the most-watched movies.</p>
        </div>
        <div className="footer-column">
          <h3>Top Rated Movies</h3>
          <p>Discover highly rated movies by users.</p>
        </div>
        <div className="footer-column">
          <h3>Upcoming Movies</h3>
          <p>Stay updated with upcoming releases.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
