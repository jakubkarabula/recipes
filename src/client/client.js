import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './app.css'
import TopBar from './components/topbar'
import Login from './views/login'
import Overview from './views/overview'
import styled from 'styled-components'
import { TOPBAR_HEIGHT } from './components/constants'
import { Provider } from 'react-redux'
import store from './redux'

const SiteWrapper = styled.div`
  padding-top: ${TOPBAR_HEIGHT}px;
`

ReactDOM.render(
  <Router>
    <Provider store={store}>
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
    </Provider>
  </Router>,
  document.getElementById('root')
)
