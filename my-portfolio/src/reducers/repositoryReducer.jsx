import { SET_REPOSITORIES } from '../actions/types';

const initialState = {
    repositories: []
};

const repositoryReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_REPOSITORIES:
            console.log("Repositories stored in the Redux store:", action.payload); // Log if we stored repos
            return {
                ...state,
                repositories: action.payload
            };
        default:
            return state;
    }
};

export default repositoryReducer;