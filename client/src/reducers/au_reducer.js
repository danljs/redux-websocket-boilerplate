'use strict'

import { LOGING_IN, LOGGED_IN, LOGOUT, CONNECTING, CONNECTED} from '../actions/index'

const initialState = {
	loging_in: false,
	logged_in: false,
	logout: true,
	connecting: false,
	connected: false,
}

export default (state = initialState, action) => {
  switch (action.type) {
    case LOGING_IN:
   //  	const url = new URL('http://localhost:1234/users'),
   //  	params = {user: action.message.username, pwd: btoa(action.message.password)}
			// Object.keys(params).forEach(key => url.searchParams.append(key, params[key]))
			// fetch(url).then(response => response.json().then(
			// 	(data) => {
			// 		console.log(data)
			debugger
					return {loging_in: true, logged_in: false}
			// 	}
			// ))
    case LOGGED_IN:
       return {loging_in: false, logged_in: true}
     case LOGOUT:
       return {loging_in: false, logged_in: false}
    default:
      return state
  }
}