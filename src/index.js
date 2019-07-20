import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import "semantic-ui-css/semantic.min.css";
import './index.css';
import { createStore, applyMiddleware } from "redux"; /* To use thunk middleware */
import { Provider } from "react-redux"; /* To Connect React-Redux */
import thunk from "redux-thunk"; /* To make Assynchronous request to the server when user log In */
import { composeWithDevTools } from "redux-devtools-extension"; /* wrappers around apply middleware */
import App from './App';
import * as serviceWorker from './serviceWorker';
import rootReducer from "./rootReducer"; /* Whole tree of state object */

const store = createStore(  rootReducer,
    composeWithDevTools(applyMiddleware(thunk)) 
    );

ReactDOM.render(
    <BrowserRouter>
    <Provider store={store}>
        <App />
        </Provider>
    </BrowserRouter>,
    document.getElementById("root")
	);

    serviceWorker.unregister();
