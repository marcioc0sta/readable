import { combineReducers } from 'redux';

import posts from './posts';
import postsOrdering from './postsOrdering';

export default combineReducers({
  posts,
  postsOrdering,
});
