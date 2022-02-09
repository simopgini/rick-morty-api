import React, { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import Footer from "../components/footer/Footer"
import Header from "../components/header/Header"
import "../scss/Character.scss"

function Character() {
  // prendo i parametri dell'hook params
  const params = useParams()
  const [characterData, setCharacterData] = useState([])
  const [episodesData, setEpisodesData] = useState([])

  useEffect(() => {
    async function fetchCharacterData() {
      // fetch character data from API
      const characterResponse = await fetch(
        `https://rickandmortyapi.com/api/character/${params.id}`
      )
      const characterData = await characterResponse.json()
      setCharacterData(characterData)

      // create an array of episodes ID by removing URL part from the episodes list of character
      const characterEpisodes = characterData.episode.map((episodeUrl) =>
        episodeUrl.replace("https://rickandmortyapi.com/api/episode/", "")
      )

      // create a string of episodes ID divided by comma
      const characterEpisodesString = characterEpisodes.join(",")

      // fetch episodes from API
      const episodesResponse = await fetch(
        `https://rickandmortyapi.com/api/episode/${characterEpisodesString}`
      )
      let episodesData = await episodesResponse.json()

      if (!Array.isArray(episodesData)) {
        episodesData = [episodesData]
      }

      setEpisodesData(episodesData)
    }

    fetchCharacterData()
  }, [params.id])

  return (
    <React.Fragment>
      <Header />
      <div className="character-section">
        <div className="episodes-box">
          <img
            className="img-list"
            src={characterData.image}
            alt={characterData.name}
          />
          <h2 className="ch-name">{characterData.name}</h2>
          <h3 className="ep-list">List:</h3>
          {episodesData.map((episodeData) => {
            return (
              <p className="episode" key={episodeData.id}>
                {episodeData.name}
              </p>
            )
          })}
        </div>
      </div>
      <Footer />
    </React.Fragment>
  )
}

export default Character
