import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import './app.css'
import TopBar from './components/topbar'
import Login from './views/login'
import Overview from './views/overview'
import styled from 'styled-components'
import { TOPBAR_HEIGHT } from './components/constants'

const SiteWrapper = styled.div`
  padding-top: ${TOPBAR_HEIGHT}px;
`

ReactDOM.render(
  <Router>
    <SiteWrapper>
      <TopBar />

      <Switch>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route path="/">
          <Overview />
        </Route>
      </Switch>
    </SiteWrapper>
  </Router>,
  document.getElementById('root')
)
