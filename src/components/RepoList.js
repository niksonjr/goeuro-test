import React, { PropTypes } from 'react';
import Repo from './Repo';

class RepoList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            initial: true
        };
    }

    componentWillReceiveProps() {
        this.setState({
            initial: false
        });
    }

    buildList() {
        const repos = this.props.repos;

        if (repos === null) {
            return <div className="warning">No such user.</div>;
        }
        else if (repos && repos.length) {
            return <ul>{repos.map((r, i) => <Repo key={i} item={r} />)}</ul>;
        }
        else if(!this.state.initial) {
            return <div className="warning">The user does not have any repositories.</div>;
        }
    }

    render() {
        return (
            <div>{this.buildList()}</div>
        );
    }
}

RepoList.propTypes = {
    repos: PropTypes.any
};

export default RepoList;
