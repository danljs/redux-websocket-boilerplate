export const RECEIVE_MESSAGE = 'RECEIVE_MESSAGE'
export const POST_MESSAGE = 'POST_MESSAGE'

export const CONNECTING = 'CONNECTING'
export const CONNECTED =  'CONNECTED'
export const ERROR =  'ERROR'

export function connecting(){
    return {type: CONNECTING}
}
export function connected(){
    return {type: CONNECTED}
}
export function error(message){
    return {type: ERROR,message}
}
export function post_message(message){
    return {type: POST_MESSAGE,message}
}
export function receive_message(message){
    return {type: RECEIVE_MESSAGE,message}
}


