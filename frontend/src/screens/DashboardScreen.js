import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Container } from 'react-bootstrap'

import Sidebar from '../components/Sidebar'

import HomeScreen from './HomeScreen'

const DashboardScreen = () => {
  return (
    <Router>
      <Sidebar />
      <Container>
        <Route path='/' component={HomeScreen} exact />
      </Container>
    </Router>
  )
}

export default DashboardScreen
