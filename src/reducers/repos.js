import types from '../constants';

const repos = (state = [], action) => {
    switch (action.type) {
        case types.FETCH_SUCCESS:
            return Object.assign({}, {
                list: action.repos
            });
        case types.FETCH_FAIL:
            return Object.assign({}, {
                list: action.repos
            });
        default:
            return state;
    }
}

export default repos;
