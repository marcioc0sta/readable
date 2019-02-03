import { getPostDetail, getPostComments, voteComment } from '../api/ReadableApi';

export const GET_POST_DETAIL = 'GET_POST_DETAIL';
export const GET_POST_COMMENTS = 'GET_POST_COMMENTS';
export const ORDER_COMMENTS_BY_VOTESCORE = 'ORDER_COMMENTS_BY_VOTESCORE';
export const COMMENTVOTE = 'COMMENTVOTE';

function postDetail(post) {
  return {
    type: GET_POST_DETAIL,
    post,
  }
}

function postComments(comments) {
  return {
    type: GET_POST_COMMENTS,
    comments,
  }
}

export function orderCommentsByvote(comments) {
  return {
    type: ORDER_COMMENTS_BY_VOTESCORE,
    comments,
  }
}

function commentVote(comment) {
  return {
    type: COMMENTVOTE,
    comment,
  }
}

export function handleCommentVote(id, vote) {
  return dispatch => {
    return voteComment(id, vote)
      .then(result => {
        dispatch(commentVote(result));
      })
      .catch(e => {
        console.warn('Error in voteComment: ', e);
      });
  };
};


export function handleGetPostComments(id) {
  return dispatch => {
    return getPostComments(id)
      .then(result => {
        dispatch(postComments(result));
        dispatch(orderCommentsByvote(result));
      })
      .catch(e => {
        console.warn('Error in getPostComments: ', e);
      });
  }
}

export function handleGetPostDetail(id) {
  return dispatch => {
    return getPostDetail(id)
      .then(result => {
        dispatch(postDetail(result));
      })
      .catch(e => {
        console.warn('Error in getPostDetail: ', e);
      });
  }
}
