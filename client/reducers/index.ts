import { combineReducers } from 'redux'

import profileReducer from './profile'
import matchesReducer from './matches'

export default combineReducers({
  profile: profileReducer,
  matches: matchesReducer,
})
