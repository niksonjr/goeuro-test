import { connect } from 'react-redux';
import RepoList from '../components/RepoList';

const mapStateToProps = (state) => ({
    repos: state.repos.list
});

const Repos = connect(
    mapStateToProps
)(RepoList);

export default Repos;
