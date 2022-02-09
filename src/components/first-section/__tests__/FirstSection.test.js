import { render, screen, cleanup } from "@testing-library/react"

import FirstSection from "../FirstSection"

afterEach(() => {
  cleanup()
})

test("should render ", () => {
  render(<FirstSection />)
})
