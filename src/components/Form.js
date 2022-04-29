import React from 'react';

class Form extends React.Component {
    state = {
        title: 'JavaScript',
    };

    handleChange = (e) => {
        this.setState({
            title: e.target.value,
        });
    };

    render() {
        const { title } = this.state;
        return (
            <div>
                <form>
                    <input
                        type="text"
                        placeholder="Enter the title"
                        value={title}
                        onChange={this.handleChange}
                    />
                </form>
                <p>{title}</p>
            </div>
        );
    }
}

export default Form;
