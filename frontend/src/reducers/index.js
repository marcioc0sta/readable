import { combineReducers } from 'redux';

import posts from './posts';
import postsOrdering from './postsOrdering';
import categories from './categories';
import postsFromCategory from './postsFromCategory';
import post from './post';

export default combineReducers({
  posts,
  postsOrdering,
  categories,
  postsFromCategory,
  post,
});
