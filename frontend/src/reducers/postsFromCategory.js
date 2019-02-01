import {
  ORDER_POSTS_BY_DATE,
  ORDER_POSTS_BY_VOTESCORE,
  POSTVOTE,
} from '../actions/posts';

import { GET_POSTS_FROM_CATEGORY } from '../actions/categories';

export default function postsFromCategory(state = {}, action) {
  switch (action.type) {
    case GET_POSTS_FROM_CATEGORY:
      return {
        ...action.posts,
      }
    case POSTVOTE:
      const { post } = action;
      const votedKey = Object.keys(state).find(key => state[key].id === post.id);
      return {
        ...state,
        [votedKey]: {
          ...state[votedKey],
          voteScore: post.voteScore
        }
      }
    case ORDER_POSTS_BY_DATE:
      const orderedByTime = action.posts.sort((a, b) => {
        return new Date(b.timestamp) - new Date(a.timestamp)
      });
      return {
        ...state,
        ...orderedByTime,
      }
    case ORDER_POSTS_BY_VOTESCORE:
      const orderedByVote = action.posts.sort((a, b) => {
        return b.voteScore - a.voteScore
      });
      return {
        ...state,
        ...orderedByVote,
      }
    default:
      return state;
  }
}
