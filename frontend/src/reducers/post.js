import { GET_POST_DETAIL, GET_POST_COMMENTS } from '../actions/post';

export default function post ( state = {}, action ) {
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
    default:
      return state;
  }
}
