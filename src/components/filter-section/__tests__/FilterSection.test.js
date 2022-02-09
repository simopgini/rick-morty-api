import { render, screen, cleanup } from "@testing-library/react"
import FilterSection from "../FilterSection"

afterEach(() => {
  cleanup()
})

test("should display the correct number of options", () => {
  render(<FilterSection />)
  expect(screen.getAllByRole("option").length).toBe(5)
})
