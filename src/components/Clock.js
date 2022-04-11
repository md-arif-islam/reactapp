import React from 'react';

class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = { date: new Date() };
    }

    componentDidMount() {
        this.clockTimer = setInterval(() => {
            this.tick();
        }, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.clockTimer);
    }

    tick() {
        this.setState({
            date: new Date(),
        });
    }

    render() {
        const { props } = this;
        const { state } = this;

        return (
            <h1 className="heading">
                <span className="text">{state.date.toLocaleTimeString(props.locale)}</span>
            </h1>
        );
    }
}

export default Clock;
