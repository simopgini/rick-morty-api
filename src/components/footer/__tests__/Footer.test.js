import { render, cleanup } from "@testing-library/react"
import Footer from "../Footer"

afterEach(() => {
  cleanup()
})

test("should render footer component", () => {
  render(<Footer />)
})
