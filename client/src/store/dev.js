'use strict';
import React from 'react'
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk'
import { createDevTools, persistState } from 'redux-devtools';
import LogMonitor from 'redux-devtools-log-monitor';
import DockMonitor from 'redux-devtools-dock-monitor';

export default function hot() {
    let service = {}

    let DevTools = createDevTools(
        <DockMonitor toggleVisibilityKey='ctrl-h' changePositionKey='ctrl-q'>
        <LogMonitor />
        </DockMonitor>
    )

    const enhancer = compose(
        applyMiddleware(thunk),
        DevTools.instrument(),
        persistState(window.location.href.match(/[?&]debug_session=([^&]+)\b/))
    )

    function create(rootReducer,initialState) {
        const store = createStore(rootReducer, initialState, enhancer);

        if (module.hot) {
            module.hot.accept('../reducers', () =>
                store.replaceReducer(require('../reducers').default)
            );
        }

        return store;
    }
    service.DevTools = DevTools
    service.create = create
    return service
}()
