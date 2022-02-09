import React, { useState, useEffect } from "react"
import { OTHER_CHARACTERS } from "../constants/Constants"
import "./SecondSection.scss"
import SecondCard from "../second-card/SecondCard"
import { HiPlusCircle } from "react-icons/hi"
import FilterSection from "../filter-section/FilterSection"

const SecondSection = () => {
  const [otherCharacters, setOtherCharacters] = useState([])
  const [otherCharactersPage, setOtherCharactersPage] = useState(1)
  const [dropDownValue, setDropDownValue] = useState("all")
  const [plusButtonVisible, setPlusButtonVisible] = useState(true)

  useEffect(() => {
    async function fetchOtherCharactersFirstPage() {
      const response = await fetch(OTHER_CHARACTERS)

      if (!response.ok) {
        return
      }

      const data = await response.json()
      setOtherCharacters(data.results)
    }

    fetchOtherCharactersFirstPage()
  }, [])

  async function loadMoreOtherCharacters() {
    const nextPage = otherCharactersPage + 1

    const response = await fetch(`${OTHER_CHARACTERS}${nextPage}`)

    if (!response.ok) {
      return
    }

    const data = await response.json()

    if (nextPage === data.info.pages) {
      setPlusButtonVisible(false)
    }

    setOtherCharacters([...otherCharacters, ...data.results])
    setOtherCharactersPage(nextPage)
  }

  return (
    <div className="second-section">
      <FilterSection value={dropDownValue} onChange={setDropDownValue} />

      <div className="second-card-container">
        {otherCharacters.map((character) => {
          let status = character.status.toLowerCase()
          let gender = character.gender.toLowerCase()

          if (
            status === dropDownValue ||
            gender === dropDownValue ||
            dropDownValue === "all"
          ) {
            return <SecondCard key={character.id} character={character} />
          } else {
            return null
          }
        })}
      </div>

      <div className="button-container">
        {plusButtonVisible ? (
          <div className="button">
            <HiPlusCircle
              className="plus-icon"
              onClick={loadMoreOtherCharacters}
            />
          </div>
        ) : null}
      </div>
    </div>
  )
}

export default SecondSection
