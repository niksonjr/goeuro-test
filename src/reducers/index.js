import { combineReducers } from 'redux';
import repos from './repos';

const repoApp = combineReducers({
    repos
});

export default repoApp;
