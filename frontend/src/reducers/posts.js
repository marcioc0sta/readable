import { 
  RECEIVE_POSTS,
  ORDER_POSTS_BY_DATE,
  ORDER_POSTS_BY_VOTESCORE,
  POSTVOTE,
  ADD_POST,
  DELETE_POST,
} from '../actions/posts';

export default function posts (state = {}, action) {
  switch (action.type) {
    case RECEIVE_POSTS:
      return {
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
    case ADD_POST:
      const defineKey = Object.keys(state).length;
      return {
        ...state,
        [defineKey]: action.post
      }
    case DELETE_POST:
    const deletedKey = Object.keys(state).find(key => (
      state[key].id === action.post.id
    ));

    const newPostList = Object.keys(state).reduce((object, key) => {
      if (key !== deletedKey) {
        object[key] = state[key]
      }
      return object
    }, {})

    return {
      ...newPostList,
    }
    default:
      return state;
  }
}
