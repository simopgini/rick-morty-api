import { render, screen, cleanup } from "@testing-library/react"

import SecondCard from "../SecondCard"

afterEach(() => {
  cleanup()
})

test("should render second card component with name, url, image", () => {
  const character = {
    name: "Rick Sanchez",
    url: "https://rickandmortyapi.com/api/character/1",
    image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
  }

  render(<SecondCard character={character} />)

  const link = screen.getByTestId("link")
  expect(link).toHaveAttribute("href", character.url)
  expect(link).toHaveTextContent(character.name)

  const image = screen.getByTestId("image")
  expect(image).toHaveAttribute("src", character.image)
  expect(image).toHaveAttribute("alt", character.name)
})
