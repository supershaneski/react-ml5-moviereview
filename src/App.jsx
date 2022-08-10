import React from 'react'
import { BrowserRouter, Routes, Route} from 'react-router-dom'

import Home from './routes/Home'
import Movie from './routes/Movie'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie/:movieId" element={<Movie />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App