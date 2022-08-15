import React, { Component } from 'react';
import './App.css';
import ClassComponent from './ClassComponent';
import FunctionalComponents from './FunctionalComponents';

let count = 2

class App extends Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">
          Components Go Here<br />
          <FunctionalComponents count={count} />
          <ClassComponent count={count}/>
        </header>
      </div>
    );
  }
}

export default App;
