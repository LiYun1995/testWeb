import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

function Clock(props){
  return <h1>现在是:{props.date.toLocaleTimeString()}</h1>
}


class App extends Component {
  constructor(props){
    super(props);
    this.state = {date: new Date()};
  }

  componentDidMount(){
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount(){
    clearInterval(this.timerID);
  }

  tick(){
    this.setState({date: new Date()});
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>My First React Demo</h1>
          <img src={logo} className="App-logo" alt="logo" />
         <h1>Hello LY</h1>
         <Clock date={this.state.date}/>
        </header>
      </div>
    );
  }
}

export default App;
