'use strict'
export const 
	CHANGE_LANG = 'CHANGE_LANG',

	RECEIVE_MESSAGE = 'RECEIVE_MESSAGE',
	POST_MESSAGE = 'POST_MESSAGE',
	CONNECTING = 'CONNECTING',
	CONNECTED =  'CONNECTED',

	LOGING_IN = 'LOGING_IN',
	LOGGED_IN = 'LOGGED_IN',
	LOGOUT = 'LOGOUT',

	ERROR =  'ERROR'

export let loging_in = (message) => {
    return {type: LOGING_IN, message}
}
export let logged_in = () => {
    return {type: LOGGED_IN}
}
export let logout = () => {
    return {type: LOGOUT}
}

export let change_lang = (lang) => {
    return {type: CHANGE_LANG, lang}
}
export let connecting = () => {
    return {type: CONNECTING}
}
export let connected = () => {
    return {type: CONNECTED}
}
export let error = (message) => {
    return {type: ERROR,message}
}
export let post_message = (message) => {
    return {type: POST_MESSAGE,message}
}
export let receive_message = (message) => {
    return {type: RECEIVE_MESSAGE,message}
}


