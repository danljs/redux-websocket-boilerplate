import { combineReducers } from 'redux'
import ws_reducer from './ws_reducer'
function last_action(state=null,action){
	return action
}
const rootReducer = combineReducers({
	last_action: last_action,
	ws: ws_reducer
})
export default rootReducer 