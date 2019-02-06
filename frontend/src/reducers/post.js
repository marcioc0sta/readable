import {
  GET_POST_DETAIL,
  GET_POST_COMMENTS,
  ORDER_COMMENTS_BY_VOTESCORE,
  COMMENTVOTE,
  ADD_COMMENT,
  EDIT_COMMENT,
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
        comments: [
          ...orderedByVote,
        ]
      }
    case COMMENTVOTE:
      const { comment } = action;
      const updatedComments = state.comments.map(item => (
        item.id === comment.id ? comment : item
      ));
      return {
        ...state,
        comments: updatedComments,
      }
    case ADD_COMMENT:
      return {
        ...state,
        comments: state.comments.concat(action.comment),
      }
    case EDIT_COMMENT:
      const commentsList = state.comments.map(item => (
        item.id === action.comment.id ? action.comment : item
      ));
      return {
        ...state,
        comments: commentsList,
      }
    default:
      return state;
  }
}
