import React from 'react';

export default class ClickCounter extends React.Component {
    render() {
        const { count, incrementCount } = this.props;
        return (
            <div>
                <button type="button" onClick={incrementCount}>
                    Clicked {count} time
                </button>
            </div>
        );
    }
}
