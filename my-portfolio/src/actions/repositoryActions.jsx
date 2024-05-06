import axios from 'axios';

import { SET_REPOSITORIES } from './types';

export const setRepositories = (repos) => ({
    type: SET_REPOSITORIES,
    payload: repos
});

export const fetchRepositories = (username) => async (dispatch) => {
    try {
        const response = await axios.get(`https://api.github.com/users/${username}/repos`);
        dispatch(setRepositories(response.data));
    } catch (error) {
        console.error('Error fetching GitHub repositories:', error);
    }
};
