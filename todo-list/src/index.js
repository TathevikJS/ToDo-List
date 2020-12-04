import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux'
import { createStore, compose, applyMiddleware } from 'redux'
import Thunk from "redux-thunk";
import { rootReducer } from './redux/Reducer/rootReducer';


const store = createStore(
  rootReducer, 
  compose( // helps work applyMiddleware and redux devtool together
    applyMiddleware( // adding Middleware on your project
      Thunk, // asynchronous
    ),
    )
  )  

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}> {/* << makes Redux store available to any components  */}
    <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

