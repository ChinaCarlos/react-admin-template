import React from 'react'
import Index from './pages/index/'
import About from './pages/about'
import Conact from './pages/concat/'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

class App extends React.Component {
  state = {
    collapsed: false
  }

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed
    })
  }

  render() {
    return (
      <Router>
        <Switch>
          <Route path="/home" component={Index} />
          <Route path="/about" component={About} />
          <Route path="/conact" component={Conact} />
        </Switch>
      </Router>
    )
  }
}

export default App
