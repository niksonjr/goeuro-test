import React from 'react';
import { connect } from 'react-redux';
import { fetchData } from '../actions';

class Form extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            username: ''
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        event.preventDefault();

        this.setState({
            username: event.target.value
        })
    }

    handleSubmit(event) {
        event.preventDefault();

        this.props.dispatch(fetchData(this.state.username));
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input type="text" placeholder="Please type a Github username" onChange={this.handleChange} />
                <button onClick={this.handleSubmit}>Submit</button>
            </form>
        );
    }
}

export default connect()(Form);
