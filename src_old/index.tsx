import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// <------- Redux
import { legacy_createStore as createStore } from 'redux'
import { Provider } from 'react-redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import rootReducer from './reducers/index';
// สร้าง store
const store = createStore(rootReducer, composeWithDevTools())
//Redux------->

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);


