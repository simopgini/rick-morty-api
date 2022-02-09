import React from "react"
import Status from "../status/Status"
import { Link } from "react-router-dom"

import "./Card.scss"

const Card = ({ character }) => {
  return (
    <article className="card">
      <img
        data-testid="image"
        className="character-img"
        src={character.image}
        alt={character.name}
      />
      <section className="card-text">
        <div className="text-container">
          <h3 className="character-name">
            <Link
              data-testid="name"
              to={`/character/${character.id}`}
              className="character-link"
            >
              {character.name}
            </Link>
          </h3>
          <div className="episodes" data-testid="episodes">
            {character.episode.length} Ep.
          </div>
        </div>
        <div className="character-status">
          <Status character={character} />
          <div data-testid="status-species">
            {character.status} - {character.species}
          </div>
        </div>

        <div>
          <p className="location-text">Origin: </p>
          <a
            data-testid="origin"
            className="location-link"
            href={character.origin.url}
            target="_blank"
            rel="noreferrer"
          >
            {character.origin.name}
          </a>
        </div>

        <div>
          <p className="location-text">Location: </p>
          <a
            data-testid="location"
            className="location-link"
            href={character.location.url}
            target="_blank"
            rel="noreferrer"
          >
            {character.location.name}
          </a>
        </div>
      </section>
    </article>
  )
}

export default Card
