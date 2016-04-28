'use strict'
export const RECEIVE_MESSAGE = 'RECEIVE_MESSAGE'
export const POST_MESSAGE = 'POST_MESSAGE'

export const CONNECTING = 'CONNECTING'
export const CONNECTED =  'CONNECTED'
export const ERROR =  'ERROR'

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


