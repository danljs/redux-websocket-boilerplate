'use strict'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
export default function normal(){
    let service = {}
    const enhancer = applyMiddleware(thunk)
	function create(rootReducer,initialState) {
	    return createStore(rootReducer, initialState, enhancer)
	}

    service.DevTools = 'div'
    service.create = create
    return service
}()
