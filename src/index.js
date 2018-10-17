import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/lib/integration/react';
import { persistor, store } from './config/store';
import { render } from 'react-dom';
import Root from './screens/Root';

render(
    <Provider store={store}>
        <PersistGate persistor={persistor}>
            <Root/>
        </PersistGate>
    </Provider>, 
    document.getElementById('root'));
