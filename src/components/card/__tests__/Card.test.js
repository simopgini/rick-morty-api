import { render, screen, cleanup } from "@testing-library/react"

import Card from "../Card"

afterEach(() => {
  cleanup()
})

test("should render card component with the character information", () => {
  const character = {
    name: "Rick Sanchez",
    origin: {
      name: "Earth (C-137)",
      url: "https://rickandmortyapi.com/api/location/1",
    },
    url: "https://rickandmortyapi.com/api/character/1",
    image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
    status: "Alive",
    species: "Human",
    episode: [],
    location: {
      name: "Citadel of Ricks",
      url: "https://rickandmortyapi.com/api/location/3",
    },
  }

  render(<Card character={character} />)

  expect(screen.getByTestId("image")).toHaveAttribute("src", character.image)

  const name = screen.getByTestId("name")
  expect(name).toHaveAttribute("href", character.url)
  expect(name).toHaveTextContent(character.name)

  expect(screen.getByTestId("episodes")).toHaveTextContent(
    `${character.episode.length} Ep.`
  )

  expect(screen.getByTestId("status-species")).toHaveTextContent(
    `${character.status} - ${character.species}`
  )

  const origin = screen.getByTestId("origin")
  expect(origin).toHaveAttribute("href", character.origin.url)
  expect(origin).toHaveTextContent(character.origin.name)

  const location = screen.getByTestId("location")
  expect(location).toHaveAttribute("href", character.location.url)
  expect(location).toHaveTextContent(character.location.name)
})
