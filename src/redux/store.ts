import { createStore } from 'redux';
import { rootReducer } from '../init/rootReducer';

export const store = createStore(rootReducer)