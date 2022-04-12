import React from 'react';
import Button from './Button';

class Clock extends React.Component {
    state = { date: new Date(), local: 'bn-BD' };

    componentDidMount() {
        this.clockTimer = setInterval(() => {
            this.tick();
        }, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.tick());
    }

    handleClick = (locale) => {
        this.setState({
            local: locale,
        });
    };

    tick() {
        this.setState({
            date: new Date(),
        });
    }

    render() {
        // const { props } = this;
        const { state } = this;
        console.log('Clocked change');
        return (
            <div>
                <h1 className="heading">
                    <span className="text">{state.date.toLocaleTimeString(state.local)}</span>
                </h1>
                <Button change={this.handleClick} local="en-US" />
            </div>
        );
    }
}

export default Clock;
