import {
  GET_POST_DETAIL,
  GET_POST_COMMENTS,
  ORDER_COMMENTS_BY_VOTESCORE,
  COMMENTVOTE,
  ADD_COMMENT,
  EDIT_COMMENT,
  DELETE_COMMENT,
  EDIT_POST,
} from '../actions/post';

import { POSTVOTE } from '../actions/posts';

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
    case DELETE_COMMENT:
      const { comments } = state;
      let commentsAfterDelete = comments;

      commentsAfterDelete.splice(
          comments.findIndex(item => item.id === action.comment.id),1
        );

      return {
        ...state,
        comments: commentsAfterDelete,
      }
    case EDIT_POST:
      return {
        ...state,
        ...action.post
      }
    case POSTVOTE:
      return {
        ...state,
        voteScore: action.post.voteScore,
      }
    default:
      return state;
  }
}
