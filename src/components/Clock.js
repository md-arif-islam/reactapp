import React from 'react';
import Button from './Button';

class Clock extends React.Component {
    state = { date: new Date(), locale: 'en-US' };

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
            locale,
        });
    };

    tick() {
        this.setState({
            date: new Date(),
        });
    }

    render() {
        // const { props } = this;
        const { date, locale } = this.state;

        return (
            <div>
                <h1 className="heading">
                    <span className="text">{date.toLocaleTimeString(locale)}</span>
                </h1>
                {locale === 'bn-BD' ? (
                    <Button change={this.handleClick} locale="en-US" show enable />
                ) : (
                    <Button change={this.handleClick} locale="bn-BD" show={false} enable={false} />
                )}
            </div>
        );
    }
}

export default Clock;
