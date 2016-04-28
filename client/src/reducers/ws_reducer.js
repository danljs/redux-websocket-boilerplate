'use strict'

import { RECEIVE_MESSAGE} from '../actions/ws_actions'
const initialState = {
}

export default function ws_reducer(state = initialState, action) {
  switch (action.type) {
    case RECEIVE_MESSAGE:
        return action.message
    default:
      return state
  }

}