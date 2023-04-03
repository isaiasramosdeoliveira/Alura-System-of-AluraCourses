import React, {useEffect, useState} from 'react'
import {Outlet, Routes, Route} from 'react-router-dom'
import Home from './pages/Home/Home'
import Services from './pages/Services/Services'
import Content from './components/Content/Content'
import Menu from './components/Menu/Menu'
import Footer from './components/Footer/Footer'
import styled from 'styled-components'

function App() {
  const [services, setServices] = useState<any>();
  return (
    <div className="App">
      <Menu/>
      <Content>
        <Outlet/>
      </Content>
      <Footer/>
    </div>
  )
}

export default App
