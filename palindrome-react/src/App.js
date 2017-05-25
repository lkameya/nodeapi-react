import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { term: '' }

    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onInputChange(event) {
    this.setState({ term: event.target.value });
  }

  onFormSubmit(event) {

    event.preventDefault();

    let formBody = [];
    var a = encodeURIComponent('name');
    var value = encodeURIComponent(this.state.term);
    formBody.push(a + "=" + value);
    formBody = formBody.join("&");
    
    fetch('http://localhost:8000/api/palindrome', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded',
      },

      body: formBody
    }).then((response) =>
      this.setState({ message: response.status }));
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <form action="" onSubmit={this.onFormSubmit}>
          <input type="text" name="word" onChange={this.onInputChange} value={this.state.term} />
          <button type="submit"> Submit </button>
        </form>
        <p className="App-intro">
          {this.state.message}
        </p>
      </div>
    );
  }
}

export default App;
