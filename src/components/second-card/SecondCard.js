import React from "react"
import { Link } from "react-router-dom"

import "./SecondCard.scss"

const SecondCard = ({ character }) => {
  return (
    <Link
      data-testid="link"
      to={`/character/${character.id}`}
      className="card-link"
    >
      <div className="name-label">{character.name}</div>
      <img
        data-testid="image"
        className="squared-image"
        src={character.image}
        alt={character.name}
      />
    </Link>
  )
}

export default SecondCard
