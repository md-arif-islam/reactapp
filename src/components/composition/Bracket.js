import React from 'react';

export default class Bracket extends React.Component {
    addBracket = (text) => `[ ${text} ]`;

    render() {
        // eslint-disable-next-line react/destructuring-assignment
        return this.props.children({ addBracket: this.addBracket });
    }
}
