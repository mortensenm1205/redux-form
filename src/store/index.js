import { createStore } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import { combineReducers } from 'redux';
import { inputs } from '../Inputs/reducers';
import { display } from '../Display/reducers';

export const rReducer = combineReducers({
    inputs,
    display
})

const persistConfig = {
    key: 'root',
    storage,
    stateReconciler: autoMergeLevel2,
    blacklist: [
        'inputs'
    ]
}

const pReudcer = persistReducer(persistConfig, rReducer);

export const store = createStore(pReudcer);
export const persistor = persistStore(store);