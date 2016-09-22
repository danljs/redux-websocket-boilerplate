'use strict'

import { LOGING_IN, LOGGED_IN, LOGOUT, CONNECTING, CONNECTED } from '../actions/index'

const initialState = {
  loging_in: false,
  logged_in: false,
  connecting: false,
  connected: false,
  logout: true,
  message: 'Please input username and password...',
}

export default (state = initialState, action) => {
  switch (action.type) {
    case LOGING_IN:
      return {
        loging_in: true,
        logged_in: false,
        connecting: false,
        connected: false,
        logout: false,
        message: 'loging in....',
      }
    case LOGGED_IN:
      return {
        loging_in: false,
        logged_in: true,
        connecting: false,
        connected: false,
        logout: false,
        message: 'logged in.',
      }
    case CONNECTING:
      return {
        loging_in: false,
        logged_in: true,
        connecting: true,
        connected: false,
        logout: false,
        message: 'connecting to ws....',
      }
    case CONNECTED:
      return {
        loging_in: false,
        logged_in: true,
        connecting: false,
        connected: true,
        logout: false,
        message: 'connected to ws',
      }
    case LOGOUT:
      return initialState
    default:
      return state
  }
}
