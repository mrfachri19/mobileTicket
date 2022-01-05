import {combineReducers} from 'redux';

import auth from './auth';
import user from './user';
import movie from './movie';
import schedule from './schedule';

export default combineReducers({
  auth,
  user,
  movie,
  schedule,
});
