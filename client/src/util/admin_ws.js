import {connecting,connected,receive_message,POST_MESSAGE} from '../actions/ws_actions'

export default function admin_ws(store){
    let service = {}
    let websocket = null
    let PORT = 8383

    function ws_close(){
        if (websocket.readyState === websocket.OPEN) {
            websocket.close();
        }
    }

    function ws_start(){
        if(!!websocket){
            ws_close()
        }
        store.dispatch(connecting())

        websocket = new WebSocket("ws://" + window.location.hostname + ':'+ PORT + '/server')
        websocket.onmessage = (event)=>{store.dispatch(receive_message(JSON.parse(event.data)))}
        websocket.onopen = ()=>{store.dispatch(connected())}
        // websocket.onclose = onclose
        // websocket.onerror = onerror
    }

    store.subscribe(() => {
        const { session, last_action } = store.getState();
        switch (last_action.type) {
        case POST_MESSAGE:
            return websocket.send(JSON.stringify(last_action.message))
        default:
            return
        }
    })

    service.ws_start = ws_start
    return service
}