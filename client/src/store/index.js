import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import rootReducer from '../reducers'
import {connecting,connected,receive_message,POST_MESSAGE,LOGING_IN} from '../actions/index'
import 'whatwg-fetch'

const AU_URL = 'http://localhost:1234/users'
const WS_URL = `ws://${window.location.hostname}:8585/server`
// const WS_URL = `ws://${window.location.hostname}:8080/javaserver/server`)
// const WS_URL = `ws://${window.location.hostname}:8585`)

export default (() => {
  let websocket
  const store = createStore(rootReducer, {}, applyMiddleware(thunk))
  store.subscribe(() => {
    const { session, last_action } = store.getState()
    switch (last_action.type) {
    case POST_MESSAGE:
      return websocket.send(JSON.stringify(last_action.message))
    case LOGING_IN:
      const url = new URL(AU_URL),
      params = {user: last_action.message.username, pwd: btoa(last_action.message.password)}
      Object.keys(params).forEach(key => url.searchParams.append(key, params[key]))
      fetch(url).then(response => response.json().then((data) => {
        console.log(data)
        !!websocket && websocket.readyState === websocket.OPEN ? websocket.close() : ''
        store.dispatch(connecting())
        websocket = new WebSocket(WS_URL)
        websocket.onmessage = event => store.dispatch(receive_message(JSON.parse(event.data)))
        websocket.onopen = () => {store.dispatch(connected())}
        websocket.onclose = () => {console.log('websocket.onclose')}
        websocket.onerror = () => {console.log('websocket.onerror')}
          // return {loging_in: true, logged_in: false}
      }))
    default:
        return
    }
  })
  return store
}())
