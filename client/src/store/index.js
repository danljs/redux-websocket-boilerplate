import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import rootReducer from '../reducers'
import {connecting,connected,receive_message,POST_MESSAGE} from '../actions/index'

export default (()=>{
    let websocket
    const store = createStore(rootReducer, {}, applyMiddleware(thunk))
    store.subscribe(() => {
        const { session, last_action } = store.getState()
        switch (last_action.type) {
        case POST_MESSAGE:
            return websocket.send(JSON.stringify(last_action.message))
        default:
            return
        }
    })

    !!websocket && websocket.readyState === websocket.OPEN ? websocket.close() : ''
    store.dispatch(connecting())
    websocket = new WebSocket("ws://" + window.location.hostname + ':8585/server')
    websocket.onmessage = (event)=>{store.dispatch(receive_message(JSON.parse(event.data)))}
    websocket.onopen = () => {store.dispatch(connected())}
    websocket.onclose = () => {console.log('websocket.onclose')}
    websocket.onerror = () => {console.log('websocket.onerror')}
    return store
}())
