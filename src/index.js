import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './store';
// import Routes from './routes';
import './index.css';
// import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render((
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
            {/*<Routes />*/}
            11
        </PersistGate>
    </Provider>
), document.getElementById('root'));
registerServiceWorker();
