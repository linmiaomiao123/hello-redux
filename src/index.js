import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers';
import { Provider } from 'react-redux';

import logger from 'redux-logger'; // 如果需要在每一个action中，都需要打印日志，需要用到中间件 redux-logger
import thunk from 'redux-thunk'; //action dispatch一个函数的时候 需要用到redux-thunk
import promise from 'redux-promise-middleware'; //异步处理promise中间件 
import { composeWithDevTools } from 'redux-devtools-extension'; //调试工具

// const logger = store => next => action => {
//   console.log('dispatching', action)
//   let result = next(action)
//   console.log('next state', store.getState())
//   return result
// }

// const error = store => next => action => {
//   try {
//     next(action)
//   } catch(e) {
//     console.log('error', + e)
//   }
// }

/** 创建store */
const store = createStore(rootReducer, {}, composeWithDevTools(applyMiddleware(logger, thunk, promise)));

/** 监听state , 打印获取到的state */
// store.subscribe(() => console.log('State update', store.getState()))

/** 触发action, 从而触发reducers的数据 */
// store.dispatch({
//   type: 'INCREMENT'
// })

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

if (module.hot) {
  module.hot.accept('./App', () => {
    ReactDOM.render(
      <Provider store={store}>
        <App />
      </Provider>,
      document.getElementById('root')
    );
  })
}


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
