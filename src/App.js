import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Homepage from "./pages/Homepage"
import Character from "./pages/Character"

import "./App.scss"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/character/:id" element={<Character />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
