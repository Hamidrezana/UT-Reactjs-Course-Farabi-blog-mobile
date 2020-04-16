import { createStore, combineReducers } from 'redux';
import userReducer from './reducers/user'
import blogReducer from './reducers/blogs';

const rootReducer = combineReducers({
    User: userReducer,
    Blog: blogReducer
})
const store = createStore(rootReducer);
export default store;