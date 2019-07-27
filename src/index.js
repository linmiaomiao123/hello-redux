import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { createStore } from 'redux';
import reducer from './reducers/counter';

/** 创建store */
const store = createStore(reducer);

/** 监听state , 打印获取到的state */
// store.subscribe(() => console.log('State update', store.getState()))

/** 触发action, 从而触发reducers的数据 */
// store.dispatch({
//   type: 'INCREMENT'
// })

const render = () => {
  ReactDOM.render(
    <App
      value={ store.getState() }
      onIncrement={() => store.dispatch( {type: 'INCREMENT'} )}
      onDecrement={() => store.dispatch( {type: 'DECREMENT'})}
    />, document.getElementById('root'));
}

render();

store.subscribe(render);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
