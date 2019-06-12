import React from 'react';
import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav'
import About from './components/About'
import Home from './components/Home'
import { Route, Switch } from 'react-router-dom'


class App extends React.Component {

  state = {
    currentPage: "Home"
  }

  renderPage = () => {
    return(
      <Switch>
        <Route exact path="/" render={()=><Home/>} />
        <Route path="/about" render={()=><About/>} />
      </Switch>
    )
  }

  render(){
    return (
      <div className="App">
        <header className="App-header">
          <Nav />
          {this.renderPage()}
        </header>
      </div>
    )
  }
}

export default App;

// <img src={logo} className="App-logo" alt="logo" />
