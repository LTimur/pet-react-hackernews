import {createStore} from 'redux';
import reducer from './reducer'
import middleware from './middleware'

export const configureStore = inititalState => {
    const store = createStore(reducer, inititalState, middleware);
    return store;
}