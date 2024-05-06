import { createStore, combineReducers, applyMiddleware } from 'redux';
import { thunk } from 'redux-thunk'; // Change this line

// Import your reducers here
import repositoryReducer from '../reducers/repositoryReducer';

const rootReducer = combineReducers({
    repositories: repositoryReducer
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
