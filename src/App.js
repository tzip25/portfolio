import React from 'react';
import ScrollableAnchor from 'react-scrollable-anchor'
import Nav from './components/Nav'
import Home from './components/Home'
import About from './components/About'
import Tech from './components/Tech'
import Design from './components/Design'
import Blog from './components/Blog'


class App extends React.Component {

  render(){
    return (
      <div className="App">
        <header className="App-body">
          <Nav />
          <ScrollableAnchor id={'home'}>
            <Home/>
          </ScrollableAnchor>
          <ScrollableAnchor id={'about'}>
            <About/>
          </ScrollableAnchor>
          <ScrollableAnchor id={'tech'}>
            <Tech/>
          </ScrollableAnchor>
          <ScrollableAnchor id={'design'}>
            <Design/>
          </ScrollableAnchor>
          <ScrollableAnchor id={'blog'}>
            <Blog/>
          </ScrollableAnchor>
        </header>
      </div>
    )
  }
}

export default App;
