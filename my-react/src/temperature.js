import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class BoilingVerdict extends Component {
    constructor(props) {
        super(props);
    }
    render(props) {
        const ok = <p>The water would boil.</p>;
        const no = <p>The water would not boil.</p>;
        return (
            <div>
                { this.props.temperature > 100 ? ok : no }
            </div>
        )
    }
}

function toCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9;
}

function toFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32;
}

function tryConvert(temperature, convert) {
    const input = parseInt(temperature);
    if(Number.isNaN(input)) {
        return '';
    }
    const output = convert(input);
    const rounded = Math.round(output * 1000) / 1000;
    console.log(rounded)
    return rounded.toString();
}

class TemperatureInput extends Component {
    constructor(props) {
        super(props);

        this.scaleNames = {
            c: 'Celsius',
            f: 'Fahrenheit'
        }
    }

    handleChange = (event) => {
        this.props.onTemperatureChange(event.target.value, this.props.scale);
    }

    render() {
        return (
            <fieldset>
                <legend>Enter temperature in { this.scaleNames[this.props.scale] }:</legend>
                <input value={ this.props.temperature } onChange={ this.handleChange } type="text" />
            </fieldset>
        )
    }
}

class Calculator extends Component {
    constructor(props) {
        super(props);
        this.state = {
            celsius: '',
            fahrenheit: ''
        }
    }

    handleTemperatureChange = (temperature, scale) => {
        if(scale === 'c') {
            this.setState({
                fahrenheit: tryConvert(temperature, toFahrenheit),
                celsius: temperature
            })
        } else if (scale === 'f') {
            this.setState({
                celsius: tryConvert(temperature, toCelsius),
                fahrenheit: temperature
            })
        }
    }

    render() {
        return (
            <div>
                Please enter the temperature:
                <TemperatureInput temperature={ this.state.celsius } onTemperatureChange={ this.handleTemperatureChange } scale={'c'}></TemperatureInput>
                <TemperatureInput temperature={ this.state.fahrenheit } onTemperatureChange={ this.handleTemperatureChange } scale={'f'}></TemperatureInput>
                <BoilingVerdict temperature={ this.state.celsius }></BoilingVerdict>
            </div>
        )
    }
}

export default Calculator;