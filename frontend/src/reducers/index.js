import { combineReducers } from 'redux';

import posts from './posts';
import postsOrdering from './postsOrdering';
import categories from './categories';

export default combineReducers({
  posts,
  postsOrdering,
  categories,
});
