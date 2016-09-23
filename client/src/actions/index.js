'use strict'
export const CHANGE_LANG = 'CHANGE_LANG'
export const POST_MESSAGE = 'POST_MESSAGE'
export const CONNECTING = 'CONNECTING'
export const CONNECTED = 'CONNECTED'

export const LOGING_IN = 'LOGING_IN'
export const LOGGED_IN = 'LOGGED_IN'
export const LOGOUT = 'LOGOUT'

export const ERROR = 'ERROR'

export const loging_in = message => ({
  type: LOGING_IN,
  message,
})
export const logged_in = () => ({
  type: LOGGED_IN,
})
export const logout = () => ({
  type: LOGOUT,
})

export const change_lang = lang => ({
  type: CHANGE_LANG,
  lang,
})
export const connecting = () => ({
  type: CONNECTING,
})
export const connected = () => ({
  type: CONNECTED,
})
export const error = message => ({
  type: ERROR,
  message,
})
export const post_message = message => ({
  type: POST_MESSAGE,
  message,
})
// export const receive_message = (message) => {
//     return {type: RECEIVE_MESSAGE,message}
// }

export const receive_message = message => (dispatch) => {
  switch (message.type) {
    case 'json-response':
      // return dispatch(initial(message.data))
      break
    case 'print-response':
      // return dispatch(download(message.file.data))
      break
    default:
  }
  return ''
}

