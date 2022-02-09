import { render, screen, cleanup } from "@testing-library/react"
import SecondSection from "../SecondSection"

afterEach(() => {
  cleanup()
})

test("should render", () => {
  render(<SecondSection />)
})
