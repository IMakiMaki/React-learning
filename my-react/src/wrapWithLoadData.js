import React, { Component } from 'react'

class EventEmitter {
  /* TODO */
  constructor() {
    this.eventList = [];
    this.eventFunc = {};
  }

  emit(...rest) {
    const eventName = rest[0];
    this.eventList.forEach((item, index) => {
      if(item === eventName) {
        this.eventFunc[eventName].forEach((item)=>{
          item(...rest);
        })
      }
    })
  }

  on(eventName, func) {
    this.eventList.push(eventName);
    this.eventFunc[eventName] = [];
    this.eventFunc[eventName].push(func);
  }

  off(eventName, func) {
    this.eventList.forEach((item, index) => {
      if(item === eventName) {
        this.eventFunc[eventName].forEach((item, index)=>{
          if(func === item) {
            this.eventFunc[eventName].splice(index, 1);
          }
        })
      }
    })
  }
}

export default (WrappedComponent, name) => {
  class LocalStorageActions extends Component {
    constructor() {
      super();
      this.state = {
        data: null
      }
    }

    componentWillMount() {
      let data = localStorage.getItem(name);
      try {
        this.setState(
          {
            data: JSON.parse(data)
          }
        )
      } catch (e) {
        this.setState({
          data
        })
      }
    }

    saveData = (data) => {
      try {
        localStorage.setItem(name, JSON.stringify(data))
      } catch (e) {
        localStorage.setItem(name, `${data}`)
      }
    }

    render() {
      return (
        <WrappedComponent
          data={this.state.data}
          saveData={this.saveData}
          {...this.props}
        />
      )
    }
  }

  return LocalStorageActions;
}