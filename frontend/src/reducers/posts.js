import { 
  RECEIVE_POSTS,
  ORDER_POSTS_BY_DATE,
  ORDER_POSTS_BY_VOTESCORE,
} from '../actions/posts';

export default function posts (state = {}, action) {
  switch (action.type) {
    case RECEIVE_POSTS:
      return {
        ...state,
        ...action.posts,
      }
    case ORDER_POSTS_BY_DATE:
      const orderedByTime = action.posts.sort((a,b) => {
        return new Date(b.timestamp) - new Date(a.timestamp)
      });
      return {
        ...state,
        ...orderedByTime,
      }
    case ORDER_POSTS_BY_VOTESCORE: 
      const orderedByVote = action.posts.sort((a,b) => {
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
