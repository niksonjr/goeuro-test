import types from '../constants';

export const fetchRepos = (repos) => ({
    type: types.FETCH_SUCCESS,
    repos: repos
});

export const fetchFail = (repos = null) => ({
    type: types.FETCH_FAIL,
    repos: repos
});

// Action Creators
export const fetchData = (username) => {
    return dispatch => {
        fetch(`https://api.github.com/users/${username}/repos`)
        .then(function(response) {
            if (response.status >= 400) {
                throw response.status;
            }
            return response.json();
        })
        .then(function(response) {
            dispatch(fetchRepos(response));
        })
        .catch(error => {
            if (error === 404) {
                dispatch(fetchFail());
            }
            else {
                // here we can handle other error codes if required, or we can just make a mapper for errors
                // for the task I didn't develop this for now
            }
        });
    }
}
