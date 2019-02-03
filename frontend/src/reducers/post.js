import { GET_POST_DETAIL } from '../actions/post';

export default function post ( state = {}, action ) {
  switch (action.type) {
    case GET_POST_DETAIL:
      return {
        ...action.post
      }
  
    default:
      return state;
  }
}
