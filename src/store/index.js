import { createStore } from 'redux';
import { rReducer } from '../reducers';

export const store = createStore(rReducer);