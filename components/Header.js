import React from "react";
import "../styles/Header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="header-left">
        <h1 className="logo">Movie Look</h1>
      </div>
      <div className="header-center">
        <nav>
          <a href="#popular">Popular</a>
          <a href="#top-rated">Top Rated</a>
          <a href="#upcoming">Upcoming</a>
        </nav>
      </div>
      <div className="header-right">
        <input type="text" placeholder="Search movies..." className="search-bar" />
        <button className="search-button">Search</button>
      </div>
    </header>
  );
};

export default Header;
