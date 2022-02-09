import React from "react"

import "./Header.scss"

const Header = () => {
  return (
    <header className="cover-container">
      <nav className="nav">
        <div className="home">
          <a
            className="text"
            href="http://localhost:3000/"
            target="_self"
            rel="noreferrer"
          >
            Home{" "}
          </a>
        </div>
        <div className="nav-right">
          <a
            href="https://rickandmortyapi.com/documentation"
            target="_blank"
            rel="noreferrer"
            className="text"
          >
            {" "}
            Docs
          </a>
          <a
            href="https://rickandmortyapi.com/about"
            target="_blank"
            rel="noreferrer"
            className="text"
          >
            {" "}
            About
          </a>
        </div>
      </nav>
      <div className="title-section">
        <h1 className="title">The Rick and Morty API</h1>
      </div>
    </header>
  )
}

export default Header
