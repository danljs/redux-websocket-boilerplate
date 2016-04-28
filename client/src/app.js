'use strict';
import React from 'react'
import { render } from 'react-dom'

import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import {Router, Route, IndexRoute, useRouterHistory} from 'react-router'
import { createHashHistory } from 'history'

import rootReducer from './reducers'
import login from './components/login'
import dashboard from './components/dashboard'
import workplace from './components/workplace'
import sock from './util/admin_ws'

const store = createStore(rootReducer, {}, applyMiddleware(thunk));
window.store = store
sock(store);

class app extends React.Component{
	render() {
		return (<div>{this.props.children}</div>)
	}
}

render(
  <Provider store={store}>
    <Router history={useRouterHistory(createHashHistory)({ queryKey: false })}>
      <Route path="/" component={app}>
        <IndexRoute component={login} />
        <Route path="login" component={login}/>
        <Route path="dashboard" component={dashboard}/>
        <Route path="workplace" component={workplace}/>
      </Route>
    </Router>
  </Provider>,
  document.getElementById('app')
)
