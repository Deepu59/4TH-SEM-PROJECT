import React from 'react'
import NavBar from './components/NavBAr'
import Home from './components/pages/Home'
import {Routes, Route} from 'react-router-dom'
import About from './components/pages/About'
import Blog  from './components/pages/Blog'
import Contact from './components/pages/Contact'
import Login from './components/login/Login'

const App = () => {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path = '/' element = {<Home />} />
        <Route path = '/About' element = {<About />} />
        <Route path = '/Blog' element = {<Blog />} />
        <Route path = '/Contact' element = {<Contact />} />
                <Route path = '/Login' element = {<Login/>} />
      </Routes>
    </div>
  )
}

export default App