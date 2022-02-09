import React from "react"
import { FaFacebook } from "react-icons/fa"
import { FaGithub } from "react-icons/fa"
import { FaInstagram } from "react-icons/fa"

import "./Footer.scss"

const Footer = () => {
  return (
    <footer>
      <div className="social">
        <a
          className="facebook"
          href="https://www.facebook.com/RickandMorty/"
          target="_blank"
          rel="noreferrer"
        >
          <FaFacebook size={35} className="fb" />
        </a>

        <a
          className="instagram"
          href="https://instagram.com/rickandmorty"
          target="_blank"
          rel="noreferrer"
        >
          <FaInstagram size={35} className="ig" />
        </a>

        <a
          className="github"
          href="https://github.com/simopgini"
          target="_blank"
          rel="noreferrer"
        >
          <FaGithub size={35} className="git logo" />
        </a>
      </div>

      <div className="author">
        by{" "}
        <span className="inline-name">
          <a
            className="author-link"
            href="https://it.linkedin.com/in/simona-perugini-987346a7"
            target="_blank"
            rel="noreferrer"
          >
            Simona Perugini
          </a>
        </span>{" "}
        2021
      </div>
    </footer>
  )
}

export default Footer
