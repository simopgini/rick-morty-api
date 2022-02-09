import { render, cleanup } from "@testing-library/react"
import Header from "../Header"

afterEach(() => {
  cleanup()
})

test("should render header component", () => {
  render(<Header />)
})
