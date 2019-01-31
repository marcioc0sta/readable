import { 
  ORDER_POSTS_BY_DATE,
  ORDER_POSTS_BY_VOTESCORE,
} from '../actions/posts';

export default function postsOrdering (state = { orderBy: ''}, action) {
  switch (action.type) {
    case ORDER_POSTS_BY_DATE:
      return {
        ...state,
        orderBy: 'date'
      }
    case ORDER_POSTS_BY_VOTESCORE: 
 
      return {
        ...state,
        orderBy: 'votescore'
      }
 
    default:
      return state;
  }
}
