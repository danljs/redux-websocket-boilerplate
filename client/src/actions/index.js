'use strict'
export const CHANGE_LANG = 'CHANGE_LANG'
export const POST_MESSAGE = 'POST_MESSAGE'
export const CONNECTING = 'CONNECTING'
export const CONNECTED = 'CONNECTED'

export const LOGING_IN = 'LOGING_IN'
export const LOGGED_IN = 'LOGGED_IN'
export const LOGOUT = 'LOGOUT'

export const ERROR = 'ERROR'

export const loging_in = (message) => {
  return { type: LOGING_IN, message }
}
export const logged_in = () => {
  return { type: LOGGED_IN }
}
export const logout = () => {
  return { type: LOGOUT }
}

export const change_lang = (lang) => {
  return { type: CHANGE_LANG, lang }
}
export const connecting = () => {
  return { type: CONNECTING }
}
export const connected = () => {
  return { type: CONNECTED }
}
export const error = (message) => {
  return { type: ERROR, message }
}
export const post_message = (message) => {
  return { type: POST_MESSAGE, message }
}
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

