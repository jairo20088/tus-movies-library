import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import {createStore,compose,applyMiddleware,combineReducers} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import NavReducer from './store/reducer/navegation';
import MovieReducer from './store/reducer/movies';


/* const composeEnhancers = process.env.NODE_ENV === 'development' ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : null|| compose;
 */

const store = createStore(combineReducers({
    nav: NavReducer,
    movie:MovieReducer

}),  /* composeEnhancers( */ applyMiddleware(thunk))//);

 const app = (
    <Provider store={store}>
        <App />
    </Provider>
);


ReactDOM.render(app ,document.getElementById('root'));

serviceWorker.unregister();
