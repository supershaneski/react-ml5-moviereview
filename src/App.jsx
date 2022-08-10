import React from 'react'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import AppContext from './lib/AppContext'
import Home from './routes/Home'
import Movie from './routes/Movie'

function App() {

  const [state, setState] = React.useState({
    scroll: 0,
    setScroll: handleScroll,
  })

  function handleScroll(param) {

    let scrollValue = param.hasOwnProperty("scroll") ? param.scroll : state.scroll

    setState((prev) => ({
      ...prev,
      scroll: scrollValue,
    }))

  }

  return (
    <AppContext.Provider value={state}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movie/:movieId" element={<Movie />} />
        </Routes>
      </BrowserRouter>
    </AppContext.Provider>
  )
}

export default App