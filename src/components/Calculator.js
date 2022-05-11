import React from 'react';
import { convert, toCelsius, toFahrenheit } from '../lib/converter';
import BoilingVerdict from './BoilingVerdict';
import TemparatureInput from './TemparatureInput';

export default class Calculator extends React.Component {
    state = {
        temparature: '',
        scale: 'c',
    };

    handleChange = (e, scale) => {
        this.setState({
            temparature: e.target.value,
            scale,
        });
    };

    render() {
        const { temparature, scale } = this.state;

        const celsius = scale === 'f' ? convert(temparature, toCelsius) : temparature;
        const fahrenheit = scale === 'c' ? convert(temparature, toFahrenheit) : temparature;
        return (
            <div>
                <TemparatureInput
                    scale="c"
                    temparature={celsius}
                    onTempatureChange={this.handleChange}
                />
                <TemparatureInput
                    scale="f"
                    temparature={fahrenheit}
                    onTempatureChange={this.handleChange}
                />
                <BoilingVerdict celsius={parseFloat(celsius)} />
            </div>
        );
    }
}
