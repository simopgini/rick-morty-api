import React, { useState, useEffect } from "react"
import Card from "../card/Card"
import { MAIN_CHARACTERS_URL } from "../constants/Constants"

import "./FirstSection.scss"

const FirstSection = () => {
  const [mainCharacters, setMainCharacters] = useState([])

  useEffect(() => {
    async function fetchMainCharacters() {
      const response = await fetch(MAIN_CHARACTERS_URL)
      const data = await response.json()
      setMainCharacters(data)
    }
    fetchMainCharacters()
  }, [])

  return (
    <div className="first-section">
      <h2 className="h2-title">Main Characters</h2>

      <div className="cards-container">
        {mainCharacters.map((character) => {
          return <Card key={character.id} character={character} />
        })}
      </div>
    </div>
  )
}

export default FirstSection
