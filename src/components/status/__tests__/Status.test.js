import { render, screen, cleanup } from "@testing-library/react"

import Status from "../Status"

afterEach(() => {
  cleanup()
})

test("should render status component - dead", () => {
  const character = {
    status: "Dead",
  }

  render(<Status character={character} />)

  expect(screen.getByTestId("icon")).toHaveClass("status-dead")
})

test("should render status component - alive", () => {
  const character = {
    status: "Alive",
  }

  render(<Status character={character} />)

  expect(screen.getByTestId("icon")).toHaveClass("status-alive")
})

test("should render status component - unknown", () => {
  const character = {
    status: "",
  }

  render(<Status character={character} />)

  expect(screen.getByTestId("icon")).toHaveClass("status-unknown")
})
