import { 
  GET_POST_DETAIL,
  GET_POST_COMMENTS,
  ORDER_COMMENTS_BY_VOTESCORE,
 } from '../actions/post';

export default function post(state = {}, action) {
  switch (action.type) {
    case GET_POST_DETAIL:
      return {
        ...state,
        ...action.post
      }
    case GET_POST_COMMENTS:
      return {
        ...state,
        comments: action.comments,
      }
    case ORDER_COMMENTS_BY_VOTESCORE:
      const orderedByVote = action.comments.sort((a, b) => {
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
