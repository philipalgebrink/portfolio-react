import { SET_REPOSITORIES } from '../actions/types';

const initialState = {
    repositories: []
};

const repositoryReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_REPOSITORIES:
            return {
                ...state,
                repositories: action.payload
            };
        default:
            return state;
    }
};

export default repositoryReducer;