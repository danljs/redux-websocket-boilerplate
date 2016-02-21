'use strict';
import React from 'react'
import { render } from 'react-dom'

import {Router, Route, IndexRoute} from 'react-router'
import createHistory from 'history/lib/createHashHistory'

import login from './components/login'
import rootReducer from './reducers'
import { Provider } from 'react-redux'
import configure from './store/configure'

let DevTools = configure.DevTools
const store = configure.create(rootReducer);
window.store = store

class app extends React.Component{
	render() {
		return (<div>{this.props.children}</div>)
	}
}

render(
	<Provider store={store}>
    <div>
		 <Router history={createHistory({queryKey: false})}>
          <Route path="/" component={app}>
            <IndexRoute component={login} />
            <Route path="login" component={login}/>
          </Route>
        </Router>
        <DevTools/>
    </div>
	</Provider>,
	document.getElementById('app')
)
