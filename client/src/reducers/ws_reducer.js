'use strict'
import { RECEIVE_MESSAGE} from '../actions/index'

const initialState = {
}
export default (state = initialState, action) => {
  switch (action.type) {
    case RECEIVE_MESSAGE:
        return action.message
    default:
      return state
  }
}