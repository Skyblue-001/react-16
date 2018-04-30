import React, { Component, Fragment } from 'react';
import logo from './logo.svg';
import './App.css';

class FragmentReturn extends Component{
  render(){
    return(
      <Fragment>
        <header />
        <div />
        <footer />
      </Fragment>
    )
  }
}

class StringReturnType extends Component{
  render(){
    return 'test string return';
  }
}

class App extends Component {
  render() {
    return (
      <Fragment>
        <FragmentReturn />
        <StringReturnType />
      </Fragment>
    );
  }
}

export default App;
