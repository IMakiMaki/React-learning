import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import './App.css';

// class App extends Component {
//    render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <h1 className="App-title">Welcome to React</h1>
//           <h2>{new Date().toLocaleTimeString()}</h2>
//         </header>
//         <p className="App-intro">
//           To get started, edit <code>src/App.js</code> and save to reload.
//         </p>
//       </div>
//     );
//   }
// }

function tick() {
  ReactDOM.render(
    <Clock />,
    document.getElementById('root')
  )
}

class Clock extends Component {
  constructor(props) {
    super(props)
    this.state = { date: new Date() };
  }

  componentDidMount() {
    this.TimerID = setInterval(
      () => this.tick(),
      1000
    )
  }

  componentWillUnmount() {
    clearInterval(this.timerID)
  }

  tick() {
    this.setState({date: new Date()})
  }

  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <Toggle />
        <h2>It is { this.state.date.toLocaleTimeString() }</h2>
        <ReactForm />
      </div>
    );
  }
}

class Toggle extends Component {
  constructor(props) {
    super(props);
    this.state = { isToggle: true }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    this.setState(prevState => (
      {
        isToggle: !prevState.isToggle,
        array: [0, 1, 2, 3, 4, 5, 6],
        style: {
          color: '#ab0909',
          fontSize: '20px',
          marginRight: '10px'
        }
      }
    ))
  }

  render() {
    const listItems = this.state.array && this.state.array.map((item, index) => 
      <span key={ index } style={ this.state.style }>{ item }</span>
    )
    return (
      <div>
        <button onClick={ this.handleClick }>{ this.state.isToggle ? '关闭' : '打开' }</button>
        <p>当前状态：{ this.state.isToggle ? '打开' : '关闭' }</p>
        { this.state.isToggle ? listItems : null }
      </div>
     )
  }
}

class ReactForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: 'Here is inputValue',
      textareaValue: 'Here is textareaValue',
      selectValue: ['1', '2']
    }
  }

  inputValueChange = (event) => {
    event.preventDefault();
    this.setState(
      {
        inputValue: event.target.value
      }
    )
  }

  textareaValueChange = (event) => {
    event.preventDefault();
    this.setState(
      {
        textareaValue: event.target.value
      }
    )
  }

  selectValueChange = (event) => {
    event.preventDefault();
    this.setState( 
      {
        selectValue: '1'
      }
    )
  }

  render() {
    return (
      <div>
        <p>React里的表单</p>
        <hr />
        <input value={ this.state.inputValue } onChange={ this.inputValueChange } />
        <p>{ this.state.inputValue }</p>
        <hr />
        <textarea value={ this.state.textareaValue } onChange={ this.textareaValueChange } />
        <p>{ this.state.textareaValue }</p>
        <hr />
        <select multiple={ true } value={ this.state.selectValue } onChange={ this.selectValueChange }>
          {
            [0, 1, 2, 4, 5, 6].map((item) => 
              <option key={ item.toString() } value={ item }>{ item }</option>
            )
          }
        </select>
        <p>{ this.state.selectValue }</p>
        <hr />
      </div>
    )
  }
}

setInterval(tick, 1000)

export default Clock;
