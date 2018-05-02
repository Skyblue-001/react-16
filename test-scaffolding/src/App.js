import React, { Component, Fragment } from 'react';
import { createPortal } from "react-dom";

const Message = () => "Just touched it!";

class Portals extends Component{
  render(){
    return createPortal(<Message />, document.getElementById("touchMe"));
  }
}

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
        <Portals />
      </Fragment>
    );
  }
}

export default App;
