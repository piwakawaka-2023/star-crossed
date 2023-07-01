import { combineReducers } from 'redux'

import profileReducer from './profile'
import matchesReducer from './matches'
import potentialsReducer from './potentials'

export default combineReducers({
  profile: profileReducer,
  matches: matchesReducer,
  potentials: potentialsReducer,
})
